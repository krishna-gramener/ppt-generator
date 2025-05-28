/**
 * Process flow slide template
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const process = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: linear-gradient(135deg, #f6f8fa 0%, #f1f4f8 100%);">
    <div
      data-name="title"
      data-prompt="Process section title (2-4 words)"
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
      Process Flow
    </div>

    <div style="
      position: absolute;
      top: ${120 * heightScale}px;
      left: ${60 * widthScale}px;
      width: ${1160 * widthScale}px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    ">
      <!-- Step 1 -->
      <div style="
        width: ${260 * widthScale}px;
        text-align: center;
      ">
        <div style="
          width: ${80 * widthScale}px;
          height: ${80 * heightScale}px;
          background: #3498db;
          border-radius: 50%;
          margin: 0 auto ${20 * heightScale}px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: ${32 * Math.min(widthScale, heightScale)}px;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
        ">1</div>
        <div
          data-name="step1-title"
          data-prompt="Title for step 1 (2-3 words)"
          contentEditable="true"
          style="
            font-size: ${24 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #2c3e50;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${10 * heightScale}px;
          "
        >
          Step 1
        </div>
        <div
          data-name="step1-description"
          data-prompt="Description for step 1 (10-15 words)"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #7f8c8d;
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
          "
        >
          Description of step 1
        </div>
      </div>

      <!-- Arrow 1 -->
      <div style="
        width: ${60 * widthScale}px;
        height: ${2 * heightScale}px;
        background: #bdc3c7;
        margin-top: ${40 * heightScale}px;
      "></div>

      <!-- Step 2 -->
      <div style="
        width: ${260 * widthScale}px;
        text-align: center;
      ">
        <div style="
          width: ${80 * widthScale}px;
          height: ${80 * heightScale}px;
          background: #e74c3c;
          border-radius: 50%;
          margin: 0 auto ${20 * heightScale}px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: ${32 * Math.min(widthScale, heightScale)}px;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
        ">2</div>
        <div
          data-name="step2-title"
          data-prompt="Title for step 2 (2-3 words)"
          contentEditable="true"
          style="
            font-size: ${24 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #2c3e50;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${10 * heightScale}px;
          "
        >
          Step 2
        </div>
        <div
          data-name="step2-description"
          data-prompt="Description for step 2 (10-15 words)"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #7f8c8d;
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
          "
        >
          Description of step 2
        </div>
      </div>

      <!-- Arrow 2 -->
      <div style="
        width: ${60 * widthScale}px;
        height: ${2 * heightScale}px;
        background: #bdc3c7;
        margin-top: ${40 * heightScale}px;
      "></div>

      <!-- Step 3 -->
      <div style="
        width: ${260 * widthScale}px;
        text-align: center;
      ">
        <div style="
          width: ${80 * widthScale}px;
          height: ${80 * heightScale}px;
          background: #2ecc71;
          border-radius: 50%;
          margin: 0 auto ${20 * heightScale}px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: ${32 * Math.min(widthScale, heightScale)}px;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
        ">3</div>
        <div
          data-name="step3-title"
          data-prompt="Title for step 3 (2-3 words)"
          contentEditable="true"
          style="
            font-size: ${24 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #2c3e50;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${10 * heightScale}px;
          "
        >
          Step 3
        </div>
        <div
          data-name="step3-description"
          data-prompt="Description for step 3 (10-15 words)"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #7f8c8d;
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
          "
        >
          Description of step 3
        </div>
      </div>
    </div>
  </div>`;
};

export default process;
