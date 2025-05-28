/**
 * Split content slide template with image
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const split = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: white;">
    <div
      data-name="title"
      data-prompt="Section title (2-4 words)"
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
      Section Title
    </div>

    <div style="
      position: absolute;
      top: ${120 * heightScale}px;
      left: ${60 * widthScale}px;
      width: ${520 * widthScale}px;
      height: ${540 * heightScale}px;
      background: #f8f9fa;
      border-radius: 8px;
      padding: ${20 * Math.min(widthScale, heightScale)}px;
    ">
      <img
        data-name="content-image"
        data-prompt="A relevant image for the left side"
        style="
          width: 100%;
          height: 60%;
          object-fit: cover;
          border-radius: 4px;
        "
        src="https://placehold.co/600x400/e9ecef/495057"
      />
      <div
        data-name="image-caption"
        data-prompt="Image caption or description (1-2 sentences)"
        contentEditable="true"
        style="
          margin-top: ${20 * heightScale}px;
          font-size: ${18 * Math.min(widthScale, heightScale)}px;
          color: #6c757d;
          font-family: 'Open Sans', sans-serif;
          line-height: 1.6;
        "
      >
        Image caption or brief description
      </div>
    </div>

    <div
      data-name="content"
      data-prompt="Main content points (3-4 bullet points)"
      contentEditable="true"
      style="
        position: absolute;
        top: ${120 * heightScale}px;
        right: ${60 * widthScale}px;
        width: ${520 * widthScale}px;
        font-size: ${24 * Math.min(widthScale, heightScale)}px;
        color: #2c3e50;
        font-family: 'Open Sans', sans-serif;
        line-height: 1.8;
      "
    >
      <ul style="list-style-type: none; padding: 0;">
        <li style="margin-bottom: 20px; padding-left: 30px; position: relative;">
          <span style="position: absolute; left: 0; color: #3498db;">•</span>
          Key Point 1
        </li>
        <li style="margin-bottom: 20px; padding-left: 30px; position: relative;">
          <span style="position: absolute; left: 0; color: #3498db;">•</span>
          Key Point 2
        </li>
        <li style="margin-bottom: 20px; padding-left: 30px; position: relative;">
          <span style="position: absolute; left: 0; color: #3498db;">•</span>
          Key Point 3
        </li>
      </ul>
    </div>
  </div>`;
};

export default split;
