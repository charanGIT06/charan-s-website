import { Link } from "react-router-dom";
import github from "/public/img/github.svg";
import linkedin from "/public/img/linkedin.svg";
import instagram from "/public/img/instagram.svg";
import mail from "/public/img/mail.svg";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column flex-md-row justify-content-center py-5">
      <div className="footer-links py-4 px-5">
        <h5>Links</h5>
        <ul className="footer-list">
          <Link to="/">
            <li className="pt-2">About</li>
          </Link>
          <Link to="/resume">
            <li className="pt-2">Resume</li>
          </Link>
          <Link to="/projects">
            <li className="pt-2">Projects</li>
          </Link>
          <Link to="/contact">
            <li className="pt-2">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="attributions py-4 px-5">
        <h5>Attributions</h5>
        <div className="attr pt-2 pt-2">
          <a href="https://iconscout.com/icons/github" target="_blank">
            Github Logo Icon
          </a>{" "}
          by{" "}
          <a
            href="https://iconscout.com/contributors/pixel-icons"
            target="_blank"
          >
            Pixel Icons
          </a>
        </div>
        <div className="attr pt-2">
          <a href="https://iconscout.com/icons/linkedin" target="_blank">
            Linkedin Logo Icon
          </a>{" "}
          by{" "}
          <a href="https://iconscout.com/contributors/icons-mind">Icons Mind</a>{" "}
          on <a href="https://iconscout.com">IconScout</a>
        </div>
        <div className="attr pt-2">
          <a href="https://iconscout.com/icons/instagram" target="_blank">
            Instagram Icon
          </a>{" "}
          by{" "}
          <a href="https://iconscout.com/contributors/unicons">Unicons Font</a>{" "}
          on <a href="https://iconscout.com">IconScout</a>
        </div>
        <div className="attr pt-2">
          <a href="https://iconscout.com/icons/mail" target="_blank">
            Mail Icon
          </a>{" "}
          by{" "}
          <a
            href="https://iconscout.com/contributors/jemismali"
            target="_blank"
          >
            Jemis Mali
          </a>
        </div>
      </div>
      <div className="follow py-4 px-5 md-text-center">
        <h5>Follow</h5>
        <div className="footer-socials d-flex flex-row align-items-center mt-4">
          <a href="https://github.com/charanGIT06">
            <img src={github} alt="" className="social-icon github me-4" />
          </a>
          <a href="https://www.linkedin.com/in/imcharank/">
            <img src={linkedin} alt="" className="social-icon linkedin me-4" />
          </a>
          <a href="mailto:cherry200258@gmail.com">
            <img src={mail} alt="" className="social-icon mail me-4" />
          </a>
          <a href="https://www.instagram.com/k_siva_charan/" >
            <img src={instagram} alt="" className="social-icon instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
