/**
 * Quote slide template with background image
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const quote = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto;">
    <img
      data-name="background"
      data-prompt="A contextually relevant, subtle background image that enhances the quote's theme while maintaining readability (specify image rotation, border styling, and object-fit preference if needed)"
      width="${width}"
      height="${height}"
      style="position: absolute; object-fit: cover; filter: brightness(0.5);"
      src="https://placehold.co/${width}x${height}/e9ecef/495057"
    />

    <div style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${900 * widthScale}px;
      text-align: center;
    ">
      <div style="
        font-size: ${120 * Math.min(widthScale, heightScale)}px;
        color: #3498db;
        font-family: 'Georgia', serif;
        line-height: 1;
        margin-bottom: ${40 * heightScale}px;
      ">"</div>
      
      <div
        data-name="quote"
        data-prompt="A powerful, thought-provoking quote that resonates with the presentation's theme and audience, with proper text styling (consider text transform, line spacing, character spacing, and text shadow needs)"
        contentEditable="true"
        style="
          font-size: ${36 * Math.min(widthScale, heightScale)}px;
          color: white;
          font-family: 'Georgia', serif;
          line-height: 1.6;
          margin-bottom: ${40 * heightScale}px;
          font-style: italic;
        "
      >
        Insert your quote here
      </div>

      <div
        data-name="author"
        data-prompt="Quote author's full name with their title, organization, and relevant context that establishes their credibility on the subject"
        contentEditable="true"
        style="
          font-size: ${24 * Math.min(widthScale, heightScale)}px;
          color: #3498db;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
        "
      >
        — Author Name, Title
      </div>
    </div>
  </div>`;
};

export default quote;
