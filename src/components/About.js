import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I enjoy coding interactive user interfaces and solving real-world problems with web development.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
