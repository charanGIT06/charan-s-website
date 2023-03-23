import "../css/aboutMe.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const github = "../public/img/github.svg";
  const linkedin = "../public/img/linkedin.svg";
  const mail = "../public/img/mail.svg";
  const instagram = "../public/img/instagram.svg";
  return (
    <div className="hero d-flex flex-column flex-md-row align-items-center justify-content-center">
      <div className="box"></div>
      <div className="hero-left p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-center col-12 col-md-5">
        <div className="pb-md-5">
          <div className="container d-flex flex-column align-items-center">
            <img
              src="../src/img/profile-photo.png"
              className="profile-photo"
              alt="profile-photo"
            />
            <h1 className="name">Charan K</h1>
            <div className="blue-line my-3"></div>
            <p className="designation">COMPUTER SCIENCE STUDENT</p>
            <div className="btns-container d-block d-flex d-md-none my-4">
              <Link to="/resume">
                <button className="btn btn-blue me-1">Resume</button>
              </Link>
              <Link to="/projects">
                <button className="btn btn-outline">Projects</button>
              </Link>
            </div>
          </div>
          <div className="socials d-flex flex-row align-items-center justify-content-center">
            <a href="https://github.com/charanGIT06">
              <img src={github} alt="" className="social-icon github me-4" />
            </a>
            <a href="https://www.linkedin.com/in/imcharank/">
              <img
                src={linkedin}
                alt=""
                className="social-icon linkedin me-4"
              />
            </a>
            <a href="mailto:cherry200258@gmail.com">
              <img src={mail} alt="" className="social-icon mail me-4" />
            </a>
            <a href="https://www.instagram.com/k_siva_charan/">
              <img src={instagram} alt="" className="social-icon instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-right px-5 pb-5 pt-5 pt-md-0">
        <h1 className="hello pt-4 pt-md-5">Hello</h1>
        <p className="hero-para py-3">Here's what I am and what I do</p>
        <div className="btn-container d-none d-md-block d-flex flex-column-wrap">
          <Link to="/resume">
            <button className="btn btn-blue me-3">Resume</button>
          </Link>

          <Link to="/projects">
            <button className="btn btn-outline">Projects</button>
          </Link>
        </div>
        <p className="hero-text pt-3 pt-md-5">
          As a computer science student and tech enthusiast, I have a passion
          for technology and a desire to innovate and solve complex problems.
          Throughout my academic journey, I have gained expertise in a wide
          range of programming languages, technologies, and software development
          methodologies. I love to create applications that solve real world
          problems.
        </p>
        {/* <p className="hero-text pt-1 pt-md-2">
          I make frontend development, graphic designing.
        </p> */}
      </div>
    </div>
  );
};

export default AboutMe;
