import "../css/resume.css";
import EducationCard from "../components/EducationCard";
import Item from "../components/Item.jsx";

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="heading-container d-flex flex-row align-items-center justify-content-center mb-4">
        <div className="blue-dot me-2 p-2"></div>
        <h1 className="heading p-0 my-4">Resume</h1>
      </div>

      <div className="education mb-5">
        <div className="headings-container d-flex flex-row align-items-center col-11 col-md-8">
          <p className="resume-heading m-0">Education</p>
          <a
            className="resume-btn btn btn-blue"
            href="https://drive.google.com/file/d/1KZ2GhD4e8EGmWadEmwdhyEWxbgtNCAcf/view?usp=share_link"
            target="_blank"
          >
            DOWNLOAD
          </a>
        </div>

        <div className="container education-cards d-none d-md-flex justify-content-around my-5 col-8">
          <EducationCard
            className="first-card"
            margin="mt-0 ms-5"
            date="2019 - Present"
            college="Raghu Institue of Technology"
            degree="B.Tech"
            location="Visakhapatnam"
          />
          <EducationCard
            className="second-card"
            margin="mt-0"
            date="2017 - 2019"
            college="Narayana Junior College"
            degree="Intermediate"
            location="Visakhapatnam"
          />
          <EducationCard
            className="third-card"
            margin="mt-0"
            date="2016 - 2017"
            college="Sri Satya Sai Vidhya Vihar"
            degree="Xth"
            location="Visakhapatnam"
          />
        </div>
        <div className="education-cards-mobile d-flex flex-column d-md-none my-4 col-12">
          <EducationCard
            className="first-card mt-4"
            date="2019 - Present"
            college="Raghu Institue of Technology"
            degree="B.Tech"
            location="Visakhapatnam"
          />
          <EducationCard
            className="second-card mt-4"
            date="2017 - 2019"
            college="Narayana Junior College"
            degree="Intermediate"
            location="Visakhapatnam"
          />
          <EducationCard
            className="third-card mt-4"
            date="2016 - 2017"
            college="Sri Satya Sai Vidhya Vihar"
            degree="Xth"
            location="Visakhapatnam"
          />
        </div>
      </div>

      <div className="other mb-4 col-11 col-md-8 mt-5">
        <div className="headings-container d-flex flex-row align-items-center col-12">
          <p className="resume-heading m-0 py-4">Others</p>
        </div>

        <div className="other-info d-flex flex-column flex-md-row shadow-lg p-4">
          <div className="skills mb-3 col-12 col-md-6">
            <h3 className="my-4">Professional skillset</h3>
            <Item content="Python" />
            <Item content="Java" />
            <Item content="JavaScript" />
            <Item content="React" />
            <Item content="HTML" />
            <Item content="CSS" />
          </div>
          <div className="languages col-12 col-md-6">
            <h3 className="my-4">Languages</h3>
            <Item content="English" />
            <Item content="Telugu" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
