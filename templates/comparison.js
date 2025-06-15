/**
 * Comparison slide template
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const comparison = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: white;">
    <div
      data-name="title"
      data-prompt="Clear, compelling comparison title that highlights the key contrast being presented (3-5 words)"
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
      Comparison
    </div>

    <div style="
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: ${120 * heightScale}px;
      left: ${60 * widthScale}px;
      width: ${1160 * widthScale}px;
    ">
      <!-- Left Column -->
      <div style="width: ${560 * widthScale}px;">
        <div
          data-name="left-title"
          data-prompt="Distinctive title for left option that clearly identifies its unique positioning (2-3 words)"
          contentEditable="true"
          style="
            font-size: ${32 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #3498db;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${30 * heightScale}px;
            text-align: center;
          "
        >
          Option A
        </div>
        
        <img
          data-name="left-image"
          data-prompt="High-quality image representing the left option with appropriate object-fit, rotation, and border styling if needed"
          style="
            width: 100%;
            height: ${300 * heightScale}px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: ${20 * heightScale}px;
          "
          src="https://placehold.co/600x400/e9ecef/495057"
        />

        <ul
          data-name="left-points"
          data-prompt="3-4 detailed bullet points for left option with specific metrics, benefits, and differentiators that support decision-making"
          data-list-type="check"
          contentEditable="true"
          style="
            font-size: ${20 * Math.min(widthScale, heightScale)}px;
            color: #2c3e50;
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
            list-style-type: none;
            padding: 0;
            margin: 0;
          "
        >
            <li style="margin-bottom: 15px; padding-left: 30px; position: relative;">
              <span style="position: absolute; left: 0; color: #3498db;">✓</span>
              Point 1
            </li>
            <li style="margin-bottom: 15px; padding-left: 30px; position: relative;">
              <span style="position: absolute; left: 0; color: #3498db;">✓</span>
              Point 2
            </li>
            <li style="margin-bottom: 15px; padding-left: 30px; position: relative;">
              <span style="position: absolute; left: 0; color: #3498db;">✓</span>
              Point 3
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div style="
        width: 2px;
        height: ${540 * heightScale}px;
        background: #e0e0e0;
        margin: 0 ${20 * widthScale}px;
      "></div>

      <!-- Right Column -->
      <div style="width: ${560 * widthScale}px;">
        <div
          data-name="right-title"
          data-prompt="Distinctive title for right option that clearly identifies its unique positioning (2-3 words)"
          contentEditable="true"
          style="
            font-size: ${32 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #e74c3c;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${30 * heightScale}px;
            text-align: center;
          "
        >
          Option B
        </div>
        
        <img
          data-name="right-image"
          data-prompt="High-quality image representing the right option with appropriate object-fit, rotation, and border styling if needed"
          style="
            width: 100%;
            height: ${300 * heightScale}px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: ${20 * heightScale}px;
          "
          src="https://placehold.co/600x400/e9ecef/495057"
        />

        <ul
          data-name="right-points"
          data-prompt="3-4 detailed bullet points for right option with specific metrics, benefits, and differentiators that support decision-making"
          data-list-type="check"
          contentEditable="true"
          style="
            font-size: ${20 * Math.min(widthScale, heightScale)}px;
            color: #2c3e50;
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
            list-style-type: none;
            padding: 0;
            margin: 0;
          "
        >
            <li style="margin-bottom: 15px; padding-left: 30px; position: relative;">
              <span style="position: absolute; left: 0; color: #e74c3c;">✓</span>
              Point 1
            </li>
            <li style="margin-bottom: 15px; padding-left: 30px; position: relative;">
              <span style="position: absolute; left: 0; color: #e74c3c;">✓</span>
              Point 2
            </li>
            <li style="margin-bottom: 15px; padding-left: 30px; position: relative;">
              <span style="position: absolute; left: 0; color: #e74c3c;">✓</span>
              Point 3
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;
};

export default comparison;
