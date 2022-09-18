import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  //sets up hook to use for each projects nessesary data
  const [projects] = useState([
    {
      name: "Bring The Tech",
      deployed: "https://limitless-dusk-20283.herokuapp.com/",
      repo: "https://github.com/BradsW90/Buzzed-Rocket",
    },
    {
      name: "Buzzed Rocket",
      deployed: "https://bradsw90.github.io/Buzzed-Rocket/",
      repo: "https://github.com/BradsW90/Buzzed-Rocket",
    },
    {
      name: "Weather Dashborad",
      deployed: "https://bradsw90.github.io/weather-dashboard",
      repo: "https://github.com/BradsW90/weather-dashboard",
    },
    {
      name: "API Code Quiz",
      deployed: "https://bradsw90.github.io/API-Sode-Quiz",
      repo: "https://github.com/BradsW90/API-Code-Quiz",
    },
    {
      name: "Horiseon",
      deployed: "https://bradsw90.github.io/Horiseon",
      repo: "https://github.com/BradsW90/Horiseon",
    },
    {
      name: "Run Buddy",
      deployed: "https://bradsw90.github.io/run-buddy",
      repo: "https://github.com/BradsW90/run-buddy",
    },
  ]);
  return (
    <div>
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="project-group">
        {projects.map((image, i) => (
          <div className="single-project" key={i}>
            <img
              src={require(`../../assets/images/project-images/${i}.png`)}
              alt={image.name}
              className="project-image"
            />
            <div className="project-disc">
              <h2>{image.name}</h2>
              <a href={image.deployed} target="_blank">
                Check out the project!
              </a>
              <a href={image.repo} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
