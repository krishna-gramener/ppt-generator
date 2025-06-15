/**
 * Image grid slide template
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const imageGrid = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: white;">
    <div
      data-name="title"
      data-prompt="Descriptive gallery title that conveys the theme or purpose of the image collection (3-6 words)"
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
      Image Gallery
    </div>

    <div style="
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: ${20 * Math.min(widthScale, heightScale)}px;
      position: absolute;
      top: ${120 * heightScale}px;
      left: ${60 * widthScale}px;
      width: ${1160 * widthScale}px;
    ">
      <!-- Image 1 -->
      <div style="text-align: center;">
        <img
          data-name="image1"
          data-prompt="High-quality first gallery image with appropriate object-fit, rotation, border styling, and aspect ratio (specify any image transformations needed)"
          style="
            width: 100%;
            height: ${250 * heightScale}px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: ${10 * heightScale}px;
          "
          src="https://placehold.co/400x300/e9ecef/495057"
        />
        <div
          data-name="caption1"
          data-prompt="Informative caption for first image that explains context, significance, and relevance to the presentation theme (8-12 words with appropriate text styling)"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #2c3e50;
            font-family: 'Open Sans', sans-serif;
          "
        >
          Caption 1
        </div>
      </div>

      <!-- Image 2 -->
      <div style="text-align: center;">
        <img
          data-name="image2"
          data-prompt="High-quality second gallery image with appropriate object-fit, rotation, border styling, and aspect ratio (specify any image transformations needed)"
          style="
            width: 100%;
            height: ${250 * heightScale}px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: ${10 * heightScale}px;
          "
          src="https://placehold.co/400x300/e9ecef/495057"
        />
        <div
          data-name="caption2"
          data-prompt="Informative caption for second image that explains context, significance, and relevance to the presentation theme (8-12 words with appropriate text styling)"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #2c3e50;
            font-family: 'Open Sans', sans-serif;
          "
        >
          Caption 2
        </div>
      </div>

      <!-- Image 3 -->
      <div style="text-align: center;">
        <img
          data-name="image3"
          data-prompt="High-quality third gallery image with appropriate object-fit, rotation, border styling, and aspect ratio (specify any image transformations needed)"
          style="
            width: 100%;
            height: ${250 * heightScale}px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: ${10 * heightScale}px;
          "
          src="https://placehold.co/400x300/e9ecef/495057"
        />
        <div
          data-name="caption3"
          data-prompt="Informative caption for third image that explains context, significance, and relevance to the presentation theme (8-12 words with appropriate text styling)"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #2c3e50;
            font-family: 'Open Sans', sans-serif;
          "
        >
          Caption 3
        </div>
      </div>

      <!-- Image 4 -->
      <div style="text-align: center;">
        <img
          data-name="image4"
          data-prompt="High-quality fourth gallery image with appropriate object-fit, rotation, border styling, and aspect ratio (specify any image transformations needed)"
          style="
            width: 100%;
            height: ${250 * heightScale}px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: ${10 * heightScale}px;
          "
          src="https://placehold.co/400x300/e9ecef/495057"
        />
        <div
          data-name="caption4"
          data-prompt="Informative caption for fourth image that explains context, significance, and relevance to the presentation theme (8-12 words with appropriate text styling)"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #2c3e50;
            font-family: 'Open Sans', sans-serif;
          "
        >
          Caption 4
        </div>
      </div>

      <!-- Image 5 -->
      <div style="text-align: center;">
        <img
          data-name="image5"
          data-prompt="High-quality fifth gallery image with appropriate object-fit, rotation, border styling, and aspect ratio (specify any image transformations needed)"
          style="
            width: 100%;
            height: ${250 * heightScale}px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: ${10 * heightScale}px;
          "
          src="https://placehold.co/400x300/e9ecef/495057"
        />
        <div
          data-name="caption5"
          data-prompt="Informative caption for fifth image that explains context, significance, and relevance to the presentation theme (8-12 words with appropriate text styling)"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #2c3e50;
            font-family: 'Open Sans', sans-serif;
          "
        >
          Caption 5
        </div>
      </div>

      <!-- Image 6 -->
      <div style="text-align: center;">
        <img
          data-name="image6"
          data-prompt="High-quality sixth gallery image with appropriate object-fit, rotation, border styling, and aspect ratio (specify any image transformations needed)"
          style="
            width: 100%;
            height: ${250 * heightScale}px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: ${10 * heightScale}px;
          "
          src="https://placehold.co/400x300/e9ecef/495057"
        />
        <div
          data-name="caption6"
          data-prompt="Informative caption for sixth image that explains context, significance, and relevance to the presentation theme (8-12 words with appropriate text styling)"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #2c3e50;
            font-family: 'Open Sans', sans-serif;
          "
        >
          Caption 6
        </div>
      </div>
    </div>
  </div>`;
};

export default imageGrid;
