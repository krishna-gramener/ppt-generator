// Import token from auth.js
import { token } from "./auth.js";

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js";

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
          return { src:base64Image };
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

  return { type: "docx", content: textContent };
}

async function processSpreadsheet(file) {
  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });
  
  // Extract text from all sheets
  let text = "";
  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    text += `Sheet: ${sheetName}\n${XLSX.utils.sheet_to_csv(sheet)}\n\n`;
  });
  
  return { type: "spreadsheet", content: text };
}

async function processFile(file) {
  const fileType = file.name.split(".").pop().toLowerCase();
  
  if (fileType === "pdf") {
    return processPDF(file);
  } else if (["docx", "doc"].includes(fileType)) {
    return processDOCX(file);
  } else if (["xlsx", "xls", "csv"].includes(fileType)) {
    return processSpreadsheet(file);
  } else {
    throw new Error(`Unsupported file type: ${fileType}`);
  }
}

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
              { text: "Extract all the important information from the provided image. Summarize it comprehensively." },
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

// Export the functions
export { processFile };
