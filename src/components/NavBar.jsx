import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useNav } from "../context/NavContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const NavBar = () => {
  const { activeTab, setActiveTab } = useNav()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar navbar-expand-lg bg-body-dark p-3 p-md-4 shadow">
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
            {
              [['/', 'About Me'], ['/resume', 'Resume'], ['/projects', 'Projects'], ['/contact', 'Contact']].map((item, index) => {
                return (
                  <Link to={item[0]} onClick={() => { setActiveTab(item[0]) }}>
                    <p className={`nav-link m-0 p-1 p-md-3 text-center ${activeTab === item[0].toLowerCase() ? 'active-tab' : ''} `}>{item[1]}</p>
                  </Link>
                )
              })
            }
            {/* <button className="nav-link" onClick={() => {
              toggleTheme()
            }}>
              {theme === 'light' ? 'dark' : 'light'}
              {theme === 'light' ? <MdOutlineDarkMode className="ms-2" /> : <MdOutlineLightMode className="ms-2" />}
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
