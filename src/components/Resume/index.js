import React from "react";
import bradley from "../../assets/Bradley-resume.pdf";

function Resume() {
  return (
    <section className="resume-wrapper">
      <h1 className="title">Resume</h1>
      <a href={bradley} className="resume-link" download>
        Resume
      </a>
      <p>(Download Now!)</p>
      <br />
      <br />
      <h4>Front End Preferences</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>React</li>
      </ul>
      <br />
      <br />
      <h4>Back End Preferences</h4>
      <ul>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>MySQL</li>
        <li>Handlebars</li>
        <li>Apollo</li>
        <li>Express</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
}

export default Resume;
