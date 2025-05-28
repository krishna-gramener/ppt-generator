/**
 * ESG Poster Template with color-differentiated sections
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const slide1 = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: white; border: 20px solid transparent; border-image: linear-gradient(45deg, #84fab0, #8fd3f4, #ff69b4, #ff8c00) 1;">
    <!-- Left color border -->
    <div style="position: absolute; left: 0; top: 0; width: 10px; height: 100%; background: linear-gradient(to bottom, #84fab0, #8fd3f4);"></div>
    <!-- Right color border -->
    <div style="position: absolute; right: 0; top: 0; width: 10px; height: 100%; background: linear-gradient(to bottom, #ff69b4, #ff8c00);"></div>
    <div
      data-name="title"
      data-prompt="Title of the slide (3-5 words)"
      contentEditable="true"
      style="
        position: absolute;
        top: ${40 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${48 * Math.min(widthScale, heightScale)}px;
        font-weight: 600;
        color: #2c3e50;
        font-family: 'Montserrat', sans-serif;
        padding: ${10 * heightScale}px;
        z-index: 2;
        text-align: left;
        border-left: 4px solid #84fab0;
      "
    >
      Title
    </div>

    <div
      data-name="subtitle"
      data-prompt="Subtitle of the slide (3-5 words)"
      contentEditable="true"
      style="
        position: absolute;
        top: ${140 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${32 * Math.min(widthScale, heightScale)}px;
        font-weight: 500;
        color: #34495e;
        font-family: 'Montserrat', sans-serif;
        padding: ${10 * heightScale}px;
        z-index: 2;
        text-align: left;
        border-left: 4px solid #8fd3f4;
      "
    >
      Subtitle
    </div>

    <div
      data-name="body-content"
      data-prompt="Main body content of the slide (concise, 2-3 sentences)"
      contentEditable="true"
      style="
        position: absolute;
        top: ${220 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${24 * Math.min(widthScale, heightScale)}px;
        color: #2c3e50;
        font-family: 'Open Sans', sans-serif;
        line-height: 1.8;
        padding: ${20 * heightScale}px ${20 * widthScale}px;
        z-index: 1;
        text-align: left;
        border-left: 4px solid #ff69b4;
      "
    >
     Body-content
    </div>
  </div>`;
};

export default slide1;
