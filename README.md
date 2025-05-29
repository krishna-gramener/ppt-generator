# PPTGen - Intelligent PowerPoint Generator

PPTGen is a web-based application that automatically generates professional PowerPoint presentations from various input files. It uses advanced AI to analyze your content and create visually appealing slides with appropriate layouts and styling.

## 🚀 Features

- **Multi-format Support**: Upload PDF, DOCX, CSV, and Excel files
- **Smart Content Analysis**: AI-powered content organization and slide selection
- **Real-time Preview**: See generated slides instantly in the browser
- **Professional Templates**: Various pre-designed slide layouts
- **Custom Instructions**: Add specific requirements for presentation generation

## 📖 User Guide

### Getting Started

1. **Access the Application**
   - Open the application in your web browser
   - You'll see a clean interface with file upload options

2. **Upload Files**
   - Click "Upload multiple files" or drag & drop your files
   - Supported formats: PDF, DOCX, CSV, Excel
   - You can select multiple files at once

3. **Add Instructions (Optional)**
   - Click "Additional Instructions"
   - Specify any special requirements or preferences
   - Example: "Focus on data visualization" or "Use corporate colors"

4. **Generate Presentation**
   - Click "Generate Slide"
   - Wait for the processing to complete
   - Preview generated slides in the browser

### Tips for Best Results

- Ensure input files are well-structured
- Provide clear, specific instructions if needed
- Review the preview before finalizing

## 💻 Developer Guide

### Project Structure

```
ppt_generation_app/
├── index.html          # Main application interface
├── script.js           # Core application logic
├── config.json         # Configuration settings
└── templates/          # Slide template definitions
    ├── title.js
    ├── content.js
    └── ...
```

### Setup

1. **Prerequisites**
   - Modern web browser
   - Local development server

2. **Installation**
   ```bash
   # Clone the repository
   git clone [repository-url]
   cd ppt-generation-app

   # Start a local server
   # Example using Python
   python -m http.server 8000
   ```

### Key Components

1. **File Processing**
   - PDF: Uses PDF.js for text extraction
   - DOCX: Uses Mammoth.js for content parsing
   - Spreadsheets: Uses SheetJS for data handling

2. **Slide Generation**
   - Content analysis and template selection
   - Dynamic content placement
   - Style application and formatting

### Customization

1. **Styling**
   - Modify CSS in index.html for UI changes
   - Adjust slide styles in template files

2. **Templates**
   - Located in `/templates` directory
   - Each template is a modular JS file
   - Follow existing template structure for new additions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ✨ Acknowledgments

- Bootstrap for UI components
- PDF.js for PDF processing
- Mammoth.js for DOCX handling
- SheetJS for spreadsheet support