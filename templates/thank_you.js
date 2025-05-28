/**
 * Thank you slide template
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const thankYou = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${1000 * widthScale}px;
      text-align: center;
    ">
      <div
        data-name="thank-you"
        data-prompt="Thank you message (2-3 words)"
        contentEditable="true"
        style="
          font-size: ${64 * Math.min(widthScale, heightScale)}px;
          font-weight: 600;
          color: white;
          font-family: 'Montserrat', sans-serif;
          margin-bottom: ${40 * heightScale}px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        "
      >
        Thank You!
      </div>

      <div
        data-name="contact-info"
        data-prompt="Contact information and social media"
        contentEditable="true"
        style="
          font-size: ${24 * Math.min(widthScale, heightScale)}px;
          color: rgba(255, 255, 255, 0.9);
          font-family: 'Open Sans', sans-serif;
          line-height: 1.8;
          margin-bottom: ${40 * heightScale}px;
        "
      >
        example@email.com<br>
        +1 (123) 456-7890<br>
        www.example.com
      </div>

      <div style="
        display: flex;
        justify-content: center;
        gap: ${20 * widthScale}px;
      ">
        <div
          data-name="social-linkedin"
          data-prompt="LinkedIn URL"
          contentEditable="true"
          style="
            font-size: ${20 * Math.min(widthScale, heightScale)}px;
            color: white;
            font-family: 'Open Sans', sans-serif;
            background: rgba(255, 255, 255, 0.2);
            padding: ${15 * Math.min(widthScale, heightScale)}px ${30 * widthScale}px;
            border-radius: 30px;
          "
        >
          LinkedIn
        </div>

        <div
          data-name="social-twitter"
          data-prompt="Twitter/X URL"
          contentEditable="true"
          style="
            font-size: ${20 * Math.min(widthScale, heightScale)}px;
            color: white;
            font-family: 'Open Sans', sans-serif;
            background: rgba(255, 255, 255, 0.2);
            padding: ${15 * Math.min(widthScale, heightScale)}px ${30 * widthScale}px;
            border-radius: 30px;
          "
        >
          Twitter
        </div>

        <div
          data-name="social-website"
          data-prompt="Website URL"
          contentEditable="true"
          style="
            font-size: ${20 * Math.min(widthScale, heightScale)}px;
            color: white;
            font-family: 'Open Sans', sans-serif;
            background: rgba(255, 255, 255, 0.2);
            padding: ${15 * Math.min(widthScale, heightScale)}px ${30 * widthScale}px;
            border-radius: 30px;
          "
        >
          Website
        </div>
      </div>
    </div>
  </div>`;
};

export default thankYou;
