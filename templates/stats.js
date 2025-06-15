/**
 * Statistics slide template with modern cards
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const stats = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
    <div
      data-name="title"
      data-prompt="Impactful section title for statistics that highlights the significance of the data (2-5 words)"
      contentEditable="true"
      style="
        position: absolute;
        top: ${40 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${40 * Math.min(widthScale, heightScale)}px;
        font-weight: 600;
        color: #2c3e50;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
      "
    >
      Key Statistics
    </div>

    <div style="
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: ${160 * heightScale}px;
      left: ${60 * widthScale}px;
      width: ${1160 * widthScale}px;
    ">
      <div style="
        width: ${260 * widthScale}px;
        height: ${400 * heightScale}px;
        background: white;
        border-radius: 16px;
        padding: ${30 * Math.min(widthScale, heightScale)}px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        text-align: center;
      ">
        <div
          data-name="stat1-number"
          data-prompt="First statistic number with appropriate formatting (%, $, etc.) that represents a key metric from the data"
          contentEditable="true"
          style="
            font-size: ${64 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #3498db;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${20 * heightScale}px;
          "
        >
          85%
        </div>
        <div
          data-name="stat1-description"
          data-prompt="Detailed description for first statistic that explains its significance, source, and business impact (10-15 words)"
          contentEditable="true"
          style="
            font-size: ${20 * Math.min(widthScale, heightScale)}px;
            color: #2c3e50;
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
          "
        >
          Description for statistic 1
        </div>
      </div>

      <div style="
        width: ${260 * widthScale}px;
        height: ${400 * heightScale}px;
        background: white;
        border-radius: 16px;
        padding: ${30 * Math.min(widthScale, heightScale)}px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        text-align: center;
      ">
        <div
          data-name="stat2-number"
          data-prompt="Second statistic number with appropriate formatting (%, $, etc.) that represents a key metric from the data"
          contentEditable="true"
          style="
            font-size: ${64 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #e74c3c;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${20 * heightScale}px;
          "
        >
          2.5M
        </div>
        <div
          data-name="stat2-description"
          data-prompt="Detailed description for second statistic that explains its significance, source, and business impact (10-15 words)"
          contentEditable="true"
          style="
            font-size: ${20 * Math.min(widthScale, heightScale)}px;
            color: #2c3e50;
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
          "
        >
          Description for statistic 2
        </div>
      </div>

      <div style="
        width: ${260 * widthScale}px;
        height: ${400 * heightScale}px;
        background: white;
        border-radius: 16px;
        padding: ${30 * Math.min(widthScale, heightScale)}px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        text-align: center;
      ">
        <div
          data-name="stat3-number"
          data-prompt="Third statistic number with appropriate formatting (%, $, etc.) that represents a key metric from the data"
          contentEditable="true"
          style="
            font-size: ${64 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #2ecc71;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${20 * heightScale}px;
          "
        >
          24/7
        </div>
        <div
          data-name="stat3-description"
          data-prompt="Detailed description for third statistic that explains its significance, source, and business impact (10-15 words)"
          contentEditable="true"
          style="
            font-size: ${20 * Math.min(widthScale, heightScale)}px;
            color: #2c3e50;
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
          "
        >
          Description for statistic 3
        </div>
      </div>
    </div>
  </div>`;
};

export default stats;
