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
// Import document processing functions
import { processFile } from "./document-processor.js";
// Import token from auth.js
import { token as defaultToken } from "./auth.js";

// Get token input element
const apiTokenInput = document.getElementById("apiToken");

// Function to get the current token
export function getCurrentToken() {
  const inputToken = apiTokenInput.value.trim();
  return inputToken || defaultToken;
}

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

// Helper function to create loading spinner
function createLoader(text) {
  return `<div class="d-flex align-items-center">
    <div class="spinner-border spinner-border-sm me-2" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    ${text}
  </div>`;
}

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

// File processing functions have been moved to document-processor.js

// callGeminiAPI and convertToBase64 functions have been moved to document-processor.js

// Call OpenAI API
async function callLLM(systemPrompt, userMessage) {
  try {
    const response = await fetch("https://llmfoundry.straive.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCurrentToken()}:pptgen`,
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
    ${el.tagName == "IMG" ? "@prompt" : "@text"}: ${el.tagName == "IMG" ? "" :el.dataset.prompt}`
      )
      .join("\n")}\n\n`;
  });
  return components;
}

function applyListContent(element, content) {
  // Parse items and determine list type
  const items = content["@text"].split('\n').filter(item => item.trim());
  const type = element.getAttribute('data-list-type') || (element.tagName === "OL" ? "numbered" : "bullet");
  element.innerHTML = '';
  
  // Marker styles by type
  const markers = {
    numbered: { style: "margin-bottom: 20px; padding-left: 50px;", html: i => 
      `<span style="position: absolute; left: 0; width: 32px; height: 32px; background: #3498db; color: white; border-radius: 50%; text-align: center; line-height: 32px; font-size: 18px;">${i+1}</span>` },
    bullet: { style: "margin-bottom: 15px; padding-left: 30px;", html: () => 
      `<span style="position: absolute; left: 0; color: #3498db;">•</span>` },
    check: { style: "margin-bottom: 15px; padding-left: 30px;", html: () => 
      `<span style="position: absolute; left: 0; color: #3498db;">✓</span>` },
    arrow: { style: "margin-bottom: 15px; padding-left: 30px;", html: () => 
      `<span style="position: absolute; left: 0; color: #e74c3c;">→</span>` }
  };
  
  // Apply items with markers
  const config = markers[type] || markers.bullet;
  items.forEach((item, i) => {
    const li = document.createElement('li');
    li.style = config.style + " position: relative;";
    li.innerHTML = `${config.html(i)}${item}`;
    element.appendChild(li);
  });
}

async function getTemplates() {
  // Format prompt for slide generation
  const formatPrompt=`Respond with a JSON array of slides. For each slide include:
                     - template: name of the template to use
                     - content: object with component names as keys and their content as values
                       For text components: { "type": "text", "@text": "content" }
                       For image components: { "type": "image", "@prompt": "detailed image prompt" }
                       
                     For list components (like agenda-items):
                     - Format list items as separate lines with a newline character between items
                     - Do not include bullet points or numbers in the text, as these will be added automatically
                     - Example for agenda-items: { "type": "text", "@text": "Introduction\nOverview\nKey Points\nConclusion" }`;
  
  // Build the complete system prompt
  const systemPrompt = `${systemPromptInput.value}\n\nParaphrase the following instruction and use it to generate slides: "${userInstruction.value}\n\n".
  
  \n\n${formatPrompt}

components:\n ${getComponents()}
`;

  // User prompt with available templates and extracted content
  const userPrompt = `Available templates and their purposes:
${JSON.stringify(slidesDescription.slideDescriptions, null, 2)}

Analyze the following content and generate slides:
${JSON.stringify(extractedContent, null, 2)}

All the slides generated should be titled according to the points in 'Agenda' slide. Generated content for all slides should be properly correlated.`;

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
          if (element.tagName === "IMG") {
            element.src = content;
          } else if (element.tagName === "OL" || element.tagName === "UL") {
            applyListContent(element, content);
          } else {
            // Regular text content
            element.textContent = content["@text"];
          }
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
    "https://llmfoundry.straive.com/vertexai/google/models/imagen-3.0-generate-002:predict",
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${getCurrentToken()}:pptgen` },
      body: JSON.stringify(body),
    }
  ).then((res) => res.json());
  const { mimeType, bytesBase64Encoded } = data.predictions[0];
  return `data:${mimeType};base64,${bytesBase64Encoded}`;
}
