/**
 * Chart and data visualization slide template
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const chart = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: white;">
    <div
      data-name="title"
      data-prompt="Chart section title (2-4 words)"
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
      Data Analysis
    </div>

    <div style="
      position: absolute;
      top: ${120 * heightScale}px;
      left: ${60 * widthScale}px;
      width: ${700 * widthScale}px;
      height: ${500 * heightScale}px;
      background: #f8f9fa;
      border-radius: 8px;
      padding: ${20 * Math.min(widthScale, heightScale)}px;
    ">
      <img
        data-name="chart-image"
        data-prompt="A relevant chart or graph image"
        style="
          width: 100%;
          height: 100%;
          object-fit: contain;
        "
        src="https://placehold.co/700x500/e9ecef/495057"
      />
    </div>

    <div style="
      position: absolute;
      top: ${120 * heightScale}px;
      right: ${60 * widthScale}px;
      width: ${400 * widthScale}px;
    ">
      <div
        data-name="chart-title"
        data-prompt="Chart title or type (2-3 words)"
        contentEditable="true"
        style="
          font-size: ${28 * Math.min(widthScale, heightScale)}px;
          font-weight: 600;
          color: #2c3e50;
          font-family: 'Montserrat', sans-serif;
          margin-bottom: ${20 * heightScale}px;
        "
      >
        Chart Title
      </div>

      <div
        data-name="chart-description"
        data-prompt="Description and key insights from the chart (2-3 sentences)"
        contentEditable="true"
        style="
          font-size: ${20 * Math.min(widthScale, heightScale)}px;
          color: #2c3e50;
          font-family: 'Open Sans', sans-serif;
          line-height: 1.6;
          margin-bottom: ${30 * heightScale}px;
        "
      >
        Brief description of the chart and its key insights.
      </div>

      <div
        data-name="key-points"
        data-prompt="3-4 key takeaways from the chart data"
        contentEditable="true"
        style="
          font-size: ${18 * Math.min(widthScale, heightScale)}px;
          color: #2c3e50;
          font-family: 'Open Sans', sans-serif;
          line-height: 1.6;
        "
      >
        <ul style="list-style-type: none; padding: 0;">
          <li style="margin-bottom: 15px; padding-left: 30px; position: relative;">
            <span style="position: absolute; left: 0; color: #3498db;">•</span>
            Key Point 1
          </li>
          <li style="margin-bottom: 15px; padding-left: 30px; position: relative;">
            <span style="position: absolute; left: 0; color: #3498db;">•</span>
            Key Point 2
          </li>
          <li style="margin-bottom: 15px; padding-left: 30px; position: relative;">
            <span style="position: absolute; left: 0; color: #3498db;">•</span>
            Key Point 3
          </li>
        </ul>
      </div>

      <div
        data-name="data-source"
        data-prompt="Source of the data (optional)"
        contentEditable="true"
        style="
          font-size: ${14 * Math.min(widthScale, heightScale)}px;
          color: #7f8c8d;
          font-family: 'Open Sans', sans-serif;
          font-style: italic;
          margin-top: ${20 * heightScale}px;
        "
      >
        Source: Data Source
      </div>
    </div>
  </div>`;
};

export default chart;
