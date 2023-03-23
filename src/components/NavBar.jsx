import { Link } from "react-router-dom";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 p-md-4 shadow">
      <div className="container-fluid">
        <Link to="/" className="nav-main-heading">
          <div className="name-container d-flex flex-row align-items-center">
            <div className="blue-dot me-1"></div>
            <h1 className="nav-name m-0">Charan</h1>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/">
              <a
                className="nav-link p-1 p-md-3 text-center"
                aria-current="page"
                href="#"
              >
                About Me
              </a>
            </Link>
            <Link to="/resume">
              <a
                className="nav-link p-1 p-md-3 text-center"
                aria-current="page"
                href="#"
              >
                Resume
              </a>
            </Link>
            <Link to="/projects">
              <a
                className="nav-link p-1 p-md-3 text-center"
                aria-current="page"
                href="#"
              >
                Projects
              </a>
            </Link>
            <Link to="/contact">
              <a
                className="nav-link p-1 p-md-3 text-center"
                aria-current="page"
                href="#"
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
