/**
 * Summary slide template with key takeaways
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const summary = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);">
    <div
      data-name="title"
      data-prompt="Compelling summary section title that captures the essence of the presentation (2-4 words)"
      contentEditable="true"
      style="
        position: absolute;
        top: ${40 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${40 * Math.min(widthScale, heightScale)}px;
        font-weight: 600;
        color: white;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
      "
    >
      Key Takeaways
    </div>

    <div style="
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: ${40 * Math.min(widthScale, heightScale)}px;
      position: absolute;
      top: ${120 * heightScale}px;
      left: ${60 * widthScale}px;
      width: ${1160 * widthScale}px;
    ">
      <!-- Left Column -->
      <div style="
        background: rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: ${30 * Math.min(widthScale, heightScale)}px;
      ">
        <div
          data-name="main-points-title"
          data-prompt="Impactful title for main points section that highlights key insights (2-3 words)"
          contentEditable="true"
          style="
            font-size: ${28 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: white;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${20 * heightScale}px;
          "
        >
          Main Points
        </div>

        <ul
          data-name="main-points"
          data-prompt="4-5 insightful main points from the presentation with specific details, metrics, or examples that reinforce each point"
          data-list-type="check"
          contentEditable="true"
          style="
            font-size: ${20 * Math.min(widthScale, heightScale)}px;
            color: rgba(255, 255, 255, 0.9);
            font-family: 'Open Sans', sans-serif;
            line-height: 1.8;
            list-style-type: none;
            padding: 0;
            margin: 0;
          "
        >
          <li style="margin-bottom: 20px; padding-left: 30px; position: relative;">
            <span style="position: absolute; left: 0; color: #3498db;">✓</span>
            Key Point 1
          </li>
          <li style="margin-bottom: 20px; padding-left: 30px; position: relative;">
            <span style="position: absolute; left: 0; color: #3498db;">✓</span>
            Key Point 2
          </li>
          <li style="margin-bottom: 20px; padding-left: 30px; position: relative;">
            <span style="position: absolute; left: 0; color: #3498db;">✓</span>
            Key Point 3
          </li>
          <li style="margin-bottom: 20px; padding-left: 30px; position: relative;">
            <span style="position: absolute; left: 0; color: #3498db;">✓</span>
            Key Point 4
          </li>
        </ul>
      </div>
      
      <!-- Right Column -->
      <div style="
        background: rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: ${30 * Math.min(widthScale, heightScale)}px;
      ">
        <div
          data-name="next-steps-title"
          data-prompt="Action-oriented title for next steps section that motivates follow-through (2-3 words)"
          contentEditable="true"
          style="
            font-size: ${28 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: white;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${20 * heightScale}px;
          "
        >
          Next Steps
        </div>

        <ul
          data-name="next-steps"
          data-prompt="3-4 specific, actionable next steps with timeframes, responsible parties, and expected outcomes where applicable"
          data-list-type="arrow"
          contentEditable="true"
          style="
            font-size: ${20 * Math.min(widthScale, heightScale)}px;
            color: rgba(255, 255, 255, 0.9);
            font-family: 'Open Sans', sans-serif;
            line-height: 1.8;
            list-style-type: none;
            padding: 0;
            margin: 0;
          "
        >
          <li style="margin-bottom: 20px; padding-left: 30px; position: relative;">
            <span style="position: absolute; left: 0; color: #e74c3c;">→</span>
            Next Step 1
          </li>
          <li style="margin-bottom: 20px; padding-left: 30px; position: relative;">
            <span style="position: absolute; left: 0; color: #e74c3c;">→</span>
            Next Step 2
          </li>
          <li style="margin-bottom: 20px; padding-left: 30px; position: relative;">
            <span style="position: absolute; left: 0; color: #e74c3c;">→</span>
            Next Step 3
          </li>
        </ul>
      </div>
    </div>

    <div
      data-name="contact"
      data-prompt="Compelling call to action with relevant contact information, including name, role, email, phone, and any special instructions for follow-up"
      contentEditable="true"
      style="
        position: absolute;
        bottom: ${40 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${18 * Math.min(widthScale, heightScale)}px;
        color: rgba(255, 255, 255, 0.9);
        font-family: 'Open Sans', sans-serif;
        text-align: center;
      "
    >
      Contact us: example@email.com
    </div>
  </div>`;
};

export default summary;
