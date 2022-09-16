import React from "react";
import headshot from "../../assets/images/headshot.jpg";

function AboutMe() {
  return (
    <div>
      <h1 className="about">About Me</h1>
      <img src={headshot} alt="headshot" className="headshot" />
      <p>
        Passionate Full Stack Developer with a drive to learn as much as i can
        and to make mobile first test driven apps to better costomer experience.
        Currently going to school at UNCC attending the Flex Full Stack
        BootCamp, looking to recieve my certification begining of October.
      </p>
      <br />
      <br />
      <p>
        Starting back when I was younger I've always wanted to learn to write
        code and have written several in the first language I picked up "Batch".
        I wrote a few for my own personal use and wrote one for a pervious
        employer to help simplify a daily task!
      </p>
    </div>
  );
}

export default AboutMe;
