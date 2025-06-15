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
      data-prompt="Compelling main title that captures the core message and value proposition of the presentation (5-8 words)"
      contentEditable="true"
      style="
        position: absolute;
        top: ${220 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${58 * Math.min(widthScale, heightScale)}px;
        font-weight: 600;
        color: white;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        line-height: 1.3;
        max-height: ${120 * heightScale}px;
        overflow: hidden;
      "
    >
      Presentation Title
    </div>

    <div
      data-name="subtitle"
      data-prompt="Engaging subtitle that elaborates on the main title and highlights key benefits or outcomes for the audience (10-20 words)"
      contentEditable="true"
      style="
        position: absolute;
        top: ${350 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${28 * Math.min(widthScale, heightScale)}px;
        color: rgba(255,255,255,0.9);
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        line-height: 1.4;
        max-height: ${100 * heightScale}px;
        overflow: hidden;
      "
    >
      Subtitle or Tagline
    </div>

    <div
      data-name="presenter"
      data-prompt="Presenter's full name, professional title, organization, relevant credentials, and date of presentation"
      contentEditable="true"
      style="
        position: absolute;
        bottom: ${60 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${22 * Math.min(widthScale, heightScale)}px;
        color: rgba(255,255,255,0.9);
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        line-height: 1.5;
      "
    >
      Presented by: Name, Title
    </div>
  </div>`;
};

export default title;
