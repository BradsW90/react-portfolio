import React, { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/About-me";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [navTitles] = useState(["About Me", "Portfolio", "Contact", "Resume"]);

  const [currentNavTitle, setNavTitle] = useState(navTitles[0]);

  function whatDisplays() {
    switch (currentNavTitle) {
      case "Portfolio":
        return <Portfolio></Portfolio>;
      case "Contact":
        return <Contact></Contact>;
      case "Resume":
        return <Resume></Resume>;
      default:
        return <AboutMe></AboutMe>;
    }
  }

  return (
    <div className="app-wrapper">
      <Nav
        navTitles={navTitles}
        currentNavTitle={currentNavTitle}
        setNavTitle={setNavTitle}
      ></Nav>
      <main className="main">{whatDisplays()}</main>
      <footer>
        <a href="https://github.com/bradsw90" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/bradley-woodle-s" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://stackoverflow.com/users/18478085/bradley-woodle">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </footer>
    </div>
  );
}

export default App;
