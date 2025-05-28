/**
 * Title slide template with a modern gradient background
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const title = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div
      data-name="main-title"
      data-prompt="Main title of the presentation (5-8 words)"
      contentEditable="true"
      style="
        position: absolute;
        top: ${240 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${64 * Math.min(widthScale, heightScale)}px;
        font-weight: 600;
        color: white;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
      "
    >
      Presentation Title
    </div>

    <div
      data-name="subtitle"
      data-prompt="Subtitle or tagline (10-15 words)"
      contentEditable="true"
      style="
        position: absolute;
        top: ${360 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${32 * Math.min(widthScale, heightScale)}px;
        color: rgba(255,255,255,0.9);
        font-family: 'Open Sans', sans-serif;
        text-align: center;
      "
    >
      Subtitle or Tagline
    </div>

    <div
      data-name="presenter"
      data-prompt="Presenter name and title"
      contentEditable="true"
      style="
        position: absolute;
        bottom: ${60 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${24 * Math.min(widthScale, heightScale)}px;
        color: rgba(255,255,255,0.9);
        font-family: 'Open Sans', sans-serif;
        text-align: center;
      "
    >
      Presented by: Name, Title
    </div>
  </div>`;
};

export default title;
