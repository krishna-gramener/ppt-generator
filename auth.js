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

// Initialize and export token for use in other modules
export const token = await initializeLLM();
