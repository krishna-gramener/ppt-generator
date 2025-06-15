/**
 * Timeline slide template
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const timeline = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: white;">
    <div
      data-name="title"
      data-prompt="Strategic timeline title that conveys the progression or evolution being presented (2-5 words)"
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
      "
    >
      Project Timeline
    </div>

    <div style="
      position: absolute;
      top: ${140 * heightScale}px;
      left: ${60 * widthScale}px;
      width: ${1160 * widthScale}px;
      height: ${520 * heightScale}px;
    ">
      <!-- Timeline line -->
      <div style="
        position: absolute;
        top: ${80 * heightScale}px;
        left: ${100 * widthScale}px;
        width: ${960 * widthScale}px;
        height: 4px;
        background: #e0e0e0;
      "></div>

      <!-- Timeline points -->
      <div style="
        position: absolute;
        top: ${60 * heightScale}px;
        left: ${100 * widthScale}px;
        width: ${960 * widthScale}px;
        display: flex;
        justify-content: space-between;
      ">
        <!-- Point 1 -->
        <div style="text-align: center;">
          <div style="
            width: ${40 * widthScale}px;
            height: ${40 * heightScale}px;
            background: #3498db;
            border-radius: 50%;
            margin: 0 auto;
          "></div>
          <div
            data-name="point1-date"
            data-prompt="Precise first milestone date with appropriate formatting (month/quarter/year)"
            contentEditable="true"
            style="
              margin-top: ${20 * heightScale}px;
              font-size: ${20 * Math.min(widthScale, heightScale)}px;
              font-weight: 600;
              color: #3498db;
              font-family: 'Montserrat', sans-serif;
            "
          >
            Q1 2024
          </div>
          <div
            data-name="point1-description"
            data-prompt="Detailed description of first milestone including key achievements, metrics, and responsible stakeholders (10-15 words)"
            contentEditable="true"
            style="
              margin-top: ${10 * heightScale}px;
              font-size: ${16 * Math.min(widthScale, heightScale)}px;
              color: #2c3e50;
              font-family: 'Open Sans', sans-serif;
              width: ${200 * widthScale}px;
              margin-left: ${-80 * widthScale}px;
            "
          >
            Phase 1 Description
          </div>
        </div>

        <!-- Point 2 -->
        <div style="text-align: center;">
          <div style="
            width: ${40 * widthScale}px;
            height: ${40 * heightScale}px;
            background: #e74c3c;
            border-radius: 50%;
            margin: 0 auto;
          "></div>
          <div
            data-name="point2-date"
            data-prompt="Precise second milestone date with appropriate formatting (month/quarter/year)"
            contentEditable="true"
            style="
              margin-top: ${20 * heightScale}px;
              font-size: ${20 * Math.min(widthScale, heightScale)}px;
              font-weight: 600;
              color: #e74c3c;
              font-family: 'Montserrat', sans-serif;
            "
          >
            Q2 2024
          </div>
          <div
            data-name="point2-description"
            data-prompt="Detailed description of second milestone including key achievements, metrics, and responsible stakeholders (10-15 words)"
            contentEditable="true"
            style="
              margin-top: ${10 * heightScale}px;
              font-size: ${16 * Math.min(widthScale, heightScale)}px;
              color: #2c3e50;
              font-family: 'Open Sans', sans-serif;
              width: ${200 * widthScale}px;
              margin-left: ${-80 * widthScale}px;
            "
          >
            Phase 2 Description
          </div>
        </div>

        <!-- Point 3 -->
        <div style="text-align: center;">
          <div style="
            width: ${40 * widthScale}px;
            height: ${40 * heightScale}px;
            background: #2ecc71;
            border-radius: 50%;
            margin: 0 auto;
          "></div>
          <div
            data-name="point3-date"
            data-prompt="Precise third milestone date with appropriate formatting (month/quarter/year)"
            contentEditable="true"
            style="
              margin-top: ${20 * heightScale}px;
              font-size: ${20 * Math.min(widthScale, heightScale)}px;
              font-weight: 600;
              color: #2ecc71;
              font-family: 'Montserrat', sans-serif;
            "
          >
            Q3 2024
          </div>
          <div
            data-name="point3-description"
            data-prompt="Detailed description of third milestone including key achievements, metrics, and responsible stakeholders (10-15 words)"
            contentEditable="true"
            style="
              margin-top: ${10 * heightScale}px;
              font-size: ${16 * Math.min(widthScale, heightScale)}px;
              color: #2c3e50;
              font-family: 'Open Sans', sans-serif;
              width: ${200 * widthScale}px;
              margin-left: ${-80 * widthScale}px;
            "
          >
            Phase 3 Description
          </div>
        </div>

        <!-- Point 4 -->
        <div style="text-align: center;">
          <div style="
            width: ${40 * widthScale}px;
            height: ${40 * heightScale}px;
            background: #9b59b6;
            border-radius: 50%;
            margin: 0 auto;
          "></div>
          <div
            data-name="point4-date"
            data-prompt="Precise fourth milestone date with appropriate formatting (month/quarter/year)"
            contentEditable="true"
            style="
              margin-top: ${20 * heightScale}px;
              font-size: ${20 * Math.min(widthScale, heightScale)}px;
              font-weight: 600;
              color: #9b59b6;
              font-family: 'Montserrat', sans-serif;
            "
          >
            Q4 2024
          </div>
          <div
            data-name="point4-description"
            data-prompt="Detailed description of fourth milestone including key achievements, metrics, and responsible stakeholders (10-15 words)"
            contentEditable="true"
            style="
              margin-top: ${10 * heightScale}px;
              font-size: ${16 * Math.min(widthScale, heightScale)}px;
              color: #2c3e50;
              font-family: 'Open Sans', sans-serif;
              width: ${200 * widthScale}px;
              margin-left: ${-80 * widthScale}px;
            "
          >
            Phase 4 Description
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

export default timeline;
