import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Cotact.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { NavProvider } from "./context/NavContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const App = () => {
  return (
    <div className="app">
      <ThemeProvider>
        <NavProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<AboutMe />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/resume" element={<Resume />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </NavProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
