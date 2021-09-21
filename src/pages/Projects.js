import { Fragment } from "react";
import React, { useState, useEffect } from "react";

// Import Components
import Container from "../components/fragment/FragContainer.js";

// Import Resources
import {
  pageBgColor,
  fragBgColor,
  titleColor,
} from "../components/color/Color.js";

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

const HomeTitle = () => {
  return (
    <div>
      <h1 style={{ color: titleColor, "font-family": "monospace" }}>
        {"<Welcome /> ..."}
      </h1>
    </div>
  );
};

// Home Body Contents
const ProjectContents = () => {
  return (
    <div>
      <section style={{ "margin-top": "20px", "text-align": "left" }}>
        <h4 style={{ "font-family": "Trebuchet MS", "font-weight": "bold" }}>
          Projects
        </h4>
        <p>123.</p>
      </section>
    </div>
  );
};

const Projects = () => {
  return (
    <Fragment>
      <Container>
        <ProjectContents />
      </Container>
    </Fragment>
  );
};

export default Projects;