// Import all templates
import title from "./templates/title.js";
import agenda from "./templates/agenda.js";
import content from "./templates/content.js";
import quote from "./templates/quote.js";
import stats from "./templates/stats.js";
import timeline from "./templates/timeline.js";
import comparison from "./templates/comparison.js";
import imageGrid from "./templates/image_grid.js";
import process from "./templates/process.js";
import team from "./templates/team.js";
import chart from "./templates/chart.js";
import summary from "./templates/summary.js";
import thankYou from "./templates/thank_you.js";
// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js";

// Template mapping
const templates = {
  title,
  agenda,
  content,
  quote,
  stats,
  timeline,
  comparison,
  image_grid: imageGrid,
  process,
  team,
  chart,
  summary,
  thank_you: thankYou,
};

// DOM Elements
const fileInput = document.getElementById("fileInput");
const systemPromptInput = document.getElementById("systemPrompt");
const fileList = document.getElementById("fileList");
const uploadForm = document.getElementById("uploadForm");
const userInstruction = document.getElementById("userInstruction");
const slidesPreview = document.getElementById("slidesPreview");
const slidesList = document.getElementById("slidesList");
// Get slide descriptions from config
let slidesDescription = await fetch("./config.json")
  .then((res) => res.json())
  .catch((err) => console.log(err));

let extractedContent = "";
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

// Helper function to create loading spinner
function createLoader(text) {
  return `<div class="d-flex align-items-center">
    <div class="spinner-border spinner-border-sm me-2" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    ${text}
  </div>`;
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
    // Get text content only
    const content = await page.getTextContent();
    text += content.items.map((item) => item.str).join(" ") + "\n";
  }
  return { type: "pdf", content: text };
}

async function processDOCX(file) {
  const arrayBuffer = await file.arrayBuffer();
  const imageSummaries = [];

  // Extract both text and images using mammoth's convert
  const result = await mammoth.convertToHtml(
    { arrayBuffer },
    {
      convertImage: mammoth.images.imgElement(async function (image) {
        try {
          // Get image buffer
          const imageBuffer = await image.read();
          // Convert to base64
          const base64Image = convertToBase64(imageBuffer);
          if (base64Image) {
            // Get image summary from Gemini
            const summary = await callGeminiAPI(base64Image);
            imageSummaries.push(summary);
          }
          // Return a placeholder for the image in the HTML
          return { src: "data:image/png;base64," + base64Image };
        } catch (error) {
          console.error("Error processing image:", error);
          return null;
        }
      }),
    }
  );

  // Extract plain text from the HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = result.value;
  let textContent = tempDiv.textContent || tempDiv.innerText;
  
  // Concatenate image summaries with text content
  for (const summary of imageSummaries) {
    textContent += "\n[Image Description: " + summary + "]\n";
  }

  return {
    type: "docx",
    content: textContent
  };
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

async function callGeminiAPI(base64Uri) {
  const base64Data = base64Uri.split(',')[1];
  
  try {
    const response = await fetch(
      "https://llmfoundry.straive.com/gemini/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}:pptgen`,
        },
        body: JSON.stringify({
          contents: [{
            role: "user",
            parts: [
              { text: "Capture all the details from this image" },
              { inline_data: { mime_type: "image/png", data: base64Data }}
            ]
          }],
          generationConfig: { responseModalities: ["TEXT", "IMAGE"] }
        }),
      }
    );

    const data = await response.json();
    
    // Extract text response using optional chaining
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Image description unavailable";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Image description unavailable";
  }
}

// Convert canvas/image data to base64
function convertToBase64(imageData) {
  if (!imageData) return null;
  
  try {
    if (imageData instanceof HTMLCanvasElement) return imageData.toDataURL("image/png");
    
    if (imageData instanceof Uint8Array || imageData instanceof ArrayBuffer) {
      const binary = Array.from(new Uint8Array(imageData))
        .map(byte => String.fromCharCode(byte))
        .join("");
      return `data:image/png;base64,${btoa(binary)}`;
    }
    return null;
  } catch (error) {
    console.error("Error converting to base64:", error);
    return null;
  }
}

// Call OpenAI API
async function callLLM(systemPrompt, userMessage) {
  try {
    const response = await fetch("https://llmfoundry.straive.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}:pptgen`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
      }),
    });

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message || "API error occurred");
    }
    return data.choices?.[0]?.message?.content || "No response received";
  } catch (error) {
    throw new Error(`API call failed: ${error.message}`);
  }
}

function getComponents() {
  let components = "";
  Object.entries(templates).forEach(([key, value]) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = value();
    components += `template : ${key}\n${[...tempDiv.querySelectorAll("[data-name]")]
      .map(
        (el) => `${el.dataset.name}:\n    type: ${el.tagName == "IMG" ? "image" : "text"}
    ${el.tagName == "IMG" ? "@prompt" : "@text"}: ${el.tagName == "IMG" ? "" : el.textContent || el.dataset.prompt}`
      )
      .join("\n")}\n\n`;
  });
  return components;
}

async function getTemplates() {
  // Format prompt for slide generation
  const formatPrompt=`Respond with a JSON array of slides. For each slide include:
                    - template: name of the template to use
                    - content: object with component names as keys and their content as values
                      For text components: { "type": "text", "@text": "content" }
                      For image components: { "type": "image", "@prompt": "detailed image prompt" }`;
  
  // Build the complete system prompt
  const systemPrompt = `${systemPromptInput.value}\n\n${formatPrompt}

components:\n ${getComponents()}

Additional instructions from user: ${userInstruction.value || "None provided"}`;

  // User prompt with available templates and extracted content
  const userPrompt = `Available templates and their purposes:
${JSON.stringify(slidesDescription.slideDescriptions, null, 2)}

Extracted content to analyze:
${JSON.stringify(extractedContent, null, 2)}`;

  try {
    console.log("Generating templates and content...");
    const slideData = JSON.parse(await callLLM(systemPrompt, userPrompt));
    const processedSlides = [];
    
    // Process each slide
    for (const slide of slideData) {
      const slideTemplate = templates[slide.template];
      if (!slideTemplate) {
        console.error(`Template ${slide.template} not found`);
        continue;
      }
      
      // Create slide HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = slideTemplate(640, 360);
      const processedContent = {};

      // Process content fields (text and images)
      for (const [fieldName, content] of Object.entries(slide.content)) {
        processedContent[fieldName] = content.type === "image" ? 
          await generateImageOrFallback(content["@prompt"], fieldName) : content;
      }

      // Apply content to HTML elements
      for (const [fieldName, content] of Object.entries(processedContent)) {
        const element = tempDiv.querySelector(`[data-name="${fieldName}"]`);
        if (element) {
          if (element.tagName === "IMG") element.src = content;
          else element.textContent = content["@text"];
        }
      }
      
      processedSlides.push({
        template: slide.template,
        html: tempDiv.innerHTML,
        content: processedContent
      });
    }
    return processedSlides;
  } catch (error) {
    console.error("Error generating templates:", error);
    throw error;
  }
}

// Helper function for image generation with fallback
async function generateImageOrFallback(prompt, fieldName) {
  try {
    return await drawImage({
      prompt: prompt,
      aspectRatio: "16:9"
    });
  } catch (error) {
    console.error(`Failed to generate image for ${fieldName}:`, error);
    return "https://placehold.co/600x400/e9ecef/495057?text=Image+Generation+Failed";
  }
}

function displaySlides(slides) {
  // Clear previous slides
  slidesList.innerHTML = "";
  // Add each slide
  slides.forEach((slide, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide-content";
    slideDiv.innerHTML = slide.html;
    slidesList.appendChild(slideDiv);
  });
  // Show the preview section
  slidesPreview.classList.remove("d-none");
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const files = Array.from(fileInput.files);

  // Hide preview
  slidesPreview.classList.add("d-none");
  slidesList.innerHTML = "";

  // Show file processing loader
  fileList.innerHTML = `<div class="alert alert-info">${createLoader("Processing files...")}</div`;

  try {
    // Process files
    const results = await Promise.all(files.map(processFile));
    extractedContent = results;

    // Show LLM processing loader
    fileList.innerHTML = `<div class="alert alert-info">${createLoader("Generating presentation content...")}</div>`;

    // Generate slides using templates
    const slides = await getTemplates();

    // Display the slides
    displaySlides(slides);

    // Display success message
    fileList.innerHTML = `
      <div class="alert alert-success">
        <div class="d-flex align-items-center mb-2">
          <i class="bi bi-check-circle-fill me-2"></i>
          <h6 class="mb-0">Presentation Generated Successfully!</h6>
        </div>
        <div class="mt-3">
          <p>Generated ${slides.length} slides</p>
        </div>
      </div>`;
  } catch (error) {
    console.error("Error:", error);
    fileList.innerHTML = `<div class="alert alert-danger">
      <div class="d-flex align-items-center">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        Error: ${error.message}
      </div>
    </div>`;
  }
}

async function drawImage({ prompt, aspectRatio }) {
  const body = {
    instances: [{ prompt }],
    parameters: { aspectRatio, enhancePrompt: true, sampleCount: 1, safetySetting: "block_only_high" },
  };
  const data = await fetch(
    "https://llmfoundry.straive.com/vertexai/google/models/imagen-4.0-generate-preview-05-20:predict",
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}:pptgen` },
      body: JSON.stringify(body),
    }
  ).then((res) => res.json());
  const { mimeType, bytesBase64Encoded } = data.predictions[0];
  return `data:${mimeType};base64,${bytesBase64Encoded}`;
}
