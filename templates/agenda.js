/**
 * Agenda slide template with clean layout
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const agenda = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: white;">
    <div style="position: absolute; left: 0; top: 0; width: ${width}px; height: ${120 * heightScale}px; background: #2c3e50;">
      <div
        data-name="title"
        data-prompt="Engaging title for agenda slide that sets the tone for the presentation (1-3 words)"
        contentEditable="true"
        style="
          position: absolute;
          top: ${30 * heightScale}px;
          left: ${60 * widthScale}px;
          width: ${1160 * widthScale}px;
          font-size: ${48 * Math.min(widthScale, heightScale)}px;
          font-weight: 600;
          color: white;
          font-family: 'Montserrat', sans-serif;
        "
      >
        Agenda
      </div>
    </div>

    <ol
      data-name="agenda-items"
      data-prompt="List 4-6 main agenda items with descriptions"
      data-list-type="numbered"
      contentEditable="true"
      style="
        position: absolute;
        top: ${160 * heightScale}px;
        left: ${60 * widthScale}px;
        width: ${1160 * widthScale}px;
        font-size: ${28 * Math.min(widthScale, heightScale)}px;
        color: #2c3e50;
        font-family: 'Open Sans', sans-serif;
        line-height: 1.8;
        list-style-type: none;
        padding: 0;
        margin: 0;
      "
    >
        <li style="margin-bottom: 20px; padding-left: 50px; position: relative;">
          <span style="position: absolute; left: 0; width: 32px; height: 32px; background: #3498db; color: white; border-radius: 50%; text-align: center; line-height: 32px; font-size: 18px;">1</span>
          Introduction
        </li>
        <li style="margin-bottom: 20px; padding-left: 50px; position: relative;">
          <span style="position: absolute; left: 0; width: 32px; height: 32px; background: #3498db; color: white; border-radius: 50%; text-align: center; line-height: 32px; font-size: 18px;">2</span>
          Overview
        </li>
        <li style="margin-bottom: 20px; padding-left: 50px; position: relative;">
          <span style="position: absolute; left: 0; width: 32px; height: 32px; background: #3498db; color: white; border-radius: 50%; text-align: center; line-height: 32px; font-size: 18px;">3</span>
          Key Points
        </li>
        <li style="margin-bottom: 20px; padding-left: 50px; position: relative;">
          <span style="position: absolute; left: 0; width: 32px; height: 32px; background: #3498db; color: white; border-radius: 50%; text-align: center; line-height: 32px; font-size: 18px;">4</span>
          Conclusion
        </li>
    </ol>
  </div>`;
};

export default agenda;
