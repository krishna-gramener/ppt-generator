/**
 * Team members slide template
 * @param {number} width - Width of the poster in pixels
 * @param {number} height - Height of the poster in pixels
 * @returns {string} HTML template with the specified dimensions
 */
const team = (width = 1280, height = 720) => {
  const baseWidth = 1280;
  const baseHeight = 720;

  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;

  return `<div style="width: ${width}px; height: ${height}px; position: relative; margin: 0 auto; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">
    <div
      data-name="title"
      data-prompt="Team section title (2-4 words)"
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
      Our Team
    </div>

    <div style="
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: ${30 * Math.min(widthScale, heightScale)}px;
      position: absolute;
      top: ${120 * heightScale}px;
      left: ${60 * widthScale}px;
      width: ${1160 * widthScale}px;
    ">
      <!-- Team Member 1 -->
      <div style="text-align: center;">
        <img
          data-name="member1-photo"
          data-prompt="Professional photo of team member 1"
          style="
            width: ${200 * widthScale}px;
            height: ${200 * heightScale}px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: ${20 * heightScale}px;
            border: 4px solid white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          "
          src="https://placehold.co/200x200/e9ecef/495057"
        />
        <div
          data-name="member1-name"
          data-prompt="Name of team member 1"
          contentEditable="true"
          style="
            font-size: ${24 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #2c3e50;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${10 * heightScale}px;
          "
        >
          John Doe
        </div>
        <div
          data-name="member1-title"
          data-prompt="Job title of team member 1"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #3498db;
            font-family: 'Open Sans', sans-serif;
            margin-bottom: ${10 * heightScale}px;
          "
        >
          CEO
        </div>
      </div>

      <!-- Team Member 2 -->
      <div style="text-align: center;">
        <img
          data-name="member2-photo"
          data-prompt="Professional photo of team member 2"
          style="
            width: ${200 * widthScale}px;
            height: ${200 * heightScale}px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: ${20 * heightScale}px;
            border: 4px solid white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          "
          src="https://placehold.co/200x200/e9ecef/495057"
        />
        <div
          data-name="member2-name"
          data-prompt="Name of team member 2"
          contentEditable="true"
          style="
            font-size: ${24 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #2c3e50;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${10 * heightScale}px;
          "
        >
          Jane Smith
        </div>
        <div
          data-name="member2-title"
          data-prompt="Job title of team member 2"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #3498db;
            font-family: 'Open Sans', sans-serif;
            margin-bottom: ${10 * heightScale}px;
          "
        >
          CTO
        </div>
      </div>

      <!-- Team Member 3 -->
      <div style="text-align: center;">
        <img
          data-name="member3-photo"
          data-prompt="Professional photo of team member 3"
          style="
            width: ${200 * widthScale}px;
            height: ${200 * heightScale}px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: ${20 * heightScale}px;
            border: 4px solid white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          "
          src="https://placehold.co/200x200/e9ecef/495057"
        />
        <div
          data-name="member3-name"
          data-prompt="Name of team member 3"
          contentEditable="true"
          style="
            font-size: ${24 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #2c3e50;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${10 * heightScale}px;
          "
        >
          Mike Johnson
        </div>
        <div
          data-name="member3-title"
          data-prompt="Job title of team member 3"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #3498db;
            font-family: 'Open Sans', sans-serif;
            margin-bottom: ${10 * heightScale}px;
          "
        >
          COO
        </div>
      </div>

      <!-- Team Member 4 -->
      <div style="text-align: center;">
        <img
          data-name="member4-photo"
          data-prompt="Professional photo of team member 4"
          style="
            width: ${200 * widthScale}px;
            height: ${200 * heightScale}px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: ${20 * heightScale}px;
            border: 4px solid white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          "
          src="https://placehold.co/200x200/e9ecef/495057"
        />
        <div
          data-name="member4-name"
          data-prompt="Name of team member 4"
          contentEditable="true"
          style="
            font-size: ${24 * Math.min(widthScale, heightScale)}px;
            font-weight: 600;
            color: #2c3e50;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: ${10 * heightScale}px;
          "
        >
          Sarah Wilson
        </div>
        <div
          data-name="member4-title"
          data-prompt="Job title of team member 4"
          contentEditable="true"
          style="
            font-size: ${16 * Math.min(widthScale, heightScale)}px;
            color: #3498db;
            font-family: 'Open Sans', sans-serif;
            margin-bottom: ${10 * heightScale}px;
          "
        >
          CFO
        </div>
      </div>
    </div>
  </div>`;
};

export default team;
