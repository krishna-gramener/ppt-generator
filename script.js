import { asyncLLM } from "https://cdn.jsdelivr.net/npm/asyncllm@2";
import slide1 from "./templates/slide1.js";
// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js";

// DOM Elements

const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
const uploadForm = document.getElementById("uploadForm");
const downloadBtn = document.getElementById("downloadPPTX");
const downloadContainer = document.getElementById("downloadContainer");


let extractedContent='';
// Get LLM token
async function initializeLLM() {
  try {
    const response = await fetch("https://llmfoundry.straive.com/token", { credentials: "include" });
    const { token } = await response.json();
    return token;
  } catch (error) {
    console.error("Failed to initialize LLM:", error);
    return null;
  }
}

const token = await initializeLLM();

// Add event listeners
fileInput.addEventListener("change", handleFileSelection);
uploadForm.addEventListener("submit", handleFormSubmit);

// Handle file selection
function handleFileSelection(e) {
  const files = Array.from(e.target.files);

  if (files.length > 0) {
    fileList.innerHTML = files
      .map(
        (file) =>
          `<div class="alert alert-secondary mb-2">
                ${file.name} (${(file.size / 1024).toFixed(1)} KB)
            </div>`
      )
      .join("");
  } else {
    fileList.innerHTML = "";
  }
}

// File processing functions
async function processPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map((item) => item.str).join(" ") + "\n";
  }

  return { type: "pdf", content: text };
}

async function processDOCX(file) {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return { type: "docx", content: result.value };
}

async function processSpreadsheet(file) {
  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });
  const result = {};

  workbook.SheetNames.forEach((sheetName) => {
    const worksheet = workbook.Sheets[sheetName];
    result[sheetName] = XLSX.utils.sheet_to_json(worksheet);
  });

  return { type: "spreadsheet", content: result };
}

// Main processing function
async function processFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();

  try {
    switch (extension) {
      case "pdf":
        return await processPDF(file);
      case "docx":
        return await processDOCX(file);
      case "csv":
      case "xls":
      case "xlsx":
        return await processSpreadsheet(file);
      default:
        throw new Error(`Unsupported file type: ${extension}`);
    }
  } catch (error) {
    console.error(`Error processing ${file.name}:`, error);
    throw error;
  }
}

// Form submission handler
// Helper function to create loading spinner
function createLoader(text) {
  return `<div class="d-flex align-items-center">
    <div class="spinner-border spinner-border-sm me-2" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    ${text}
  </div>`;
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const files = Array.from(fileInput.files);

  // Show file processing loader
  fileList.innerHTML = `<div class="alert alert-info">${createLoader('Processing files...')}</div`;

  try {
    // Process files
    const results = await Promise.all(files.map(processFile));
    extractedContent = results;
    console.log(extractedContent);
    // Combine all content for LLM processing
    const combinedContent = results
      .map((result) => {
        if (result.type === "spreadsheet") {
          return JSON.stringify(result.content, null, 2);
        }
        return result.content;
      })
      .join("\n\n");

    // Create the slide container with loading state
    const slideContainer = document.createElement("div");
    slideContainer.innerHTML = slide1();
    document.body.appendChild(slideContainer);

    // Show LLM processing loader
    fileList.innerHTML = `<div class="alert alert-info">${createLoader('Generating slide content...')}</div>`;

    // Get LLM summary and populate template
    const llmResponse = await processWithLLM(combinedContent, slideContainer);

    // Display results and template with success message
    fileList.innerHTML = `
            <div class="alert alert-success">
                <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-check-circle-fill me-2"></i>
                    <h6 class="mb-0">Processing Complete!</h6>
                </div>
                <div class="mt-3">
                    <h6>Extracted Content:</h6>
                    <pre class="mb-0"><code>${combinedContent.substring(0, 500)}...</code></pre>
                </div>
                <div class="mt-3">
                    <h6>LLM Summary:</h6>
                    <pre class="mb-0"><code>${JSON.stringify(llmResponse, null, 2)}</code></pre>
                </div>
            </div>`;
    downloadContainer.classList.remove('d-none');
    downloadBtn.innerHTML = `<i class="bi bi-check-circle me-2"></i>Downloaded Successfully`;
    setTimeout(() => {
      downloadBtn.innerHTML = "Download PPTX";
      downloadBtn.disabled = false;
    }, 2000);
  } catch (error) {
    fileList.innerHTML = `<div class="alert alert-danger">
      <div class="d-flex align-items-center">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        Error: ${error.message}
      </div>
    </div>`;
    downloadBtn.innerHTML = `<i class="bi bi-exclamation-triangle me-2"></i>Download Failed`;
    setTimeout(() => {
      downloadBtn.innerHTML = "Download PPTX";
      downloadBtn.disabled = false;
    }, 2000);
  }
}

// Process content with LLM
async function processWithLLM(data, slideContainer) {
  // Get the components prompt section from the slide template
  const getComponentsPrompt = () => 
    [...slideContainer.querySelectorAll('[data-name]')]
      .map(el => `${el.dataset.name}:
  type: text
  @text: ${el.dataset.prompt}
  styles: ${el.style.cssText}`)
      .join('\n\n');

  const prompt = `You are an expert slide content generator. Generate content for each component based on the provided data.
You will be given a set of placeholders, text with a .prompt and default styles you can modify.
Using the .prompt, for type=text placeholders, fill "@text" content; 
Update styles ONLY if needed and different from default.

1. Guess the user's objective in designing this poster.
2. List 3 options for each placeholder. Next to each, list pros and cons with respect to the objective CONCISELY in 1 sentence each.
3. Pick the option best aligned with the objective for each placeholder. (The product/category should clearly take center stage on images.)

COMPONENTS:
${getComponentsPrompt()}

Your JSON response should be in this format:

\`\`\`json
{
  "component-name": {
    "@text": "text for the component",
    "font-family": ... // if needed
  }
}
\`\`\`

generate content for only one slide
`

  let llmResponse = "";
  try {
    for await (const { content } of asyncLLM("https://llmfoundry.straive.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}:pptgen`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [{ role: "system", content: prompt }, { role: "user", content: `Content to analyze:\n\n${data}` }],
        stream: true,
      }),
    })) {
      llmResponse = content;
    }
    const match = llmResponse.match(/```json(.*)```/s);
    const parsedResponse = match ? JSON.parse(match[1]) : JSON.parse(llmResponse);
    
    // Update the components using the params
    for (const [name, config] of Object.entries(parsedResponse)) {
      const element = slideContainer.querySelector(`[data-name="${name}"]`);
      if (!element) {
        console.error(`data-name="${name}" not found`);
        continue;
      }
      
      // Apply properties
      Object.entries(config).forEach(([prop, value]) => {
        if (prop === "@text") {
          element.textContent = value;
        } else if (prop === "styles") {
          typeof value === "string" ? (element.style.cssText = value) : Object.assign(element.style, value);
        } else if (!prop.startsWith("@")) {
          element.style[prop] = value;
        }
      });
    }

    return parsedResponse;
  } catch (error) {
    console.error("LLM processing error:", error);
    throw new Error("Failed to process content with LLM");
  }
}
