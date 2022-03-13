import { Fragment } from "react";
import React, { useState, useEffect } from "react";

// Import Components
import Container from "../components/fragment/FragContainer.js";

// Import Resources
import {
  pageBgColor,
  fragBgColor,
  titleColor,
  lightAccent,
  contentColor,
} from "../components/config/Color.js";

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
  // List of Projects (in object)

  const ProjectBlankMsg = ({ blankMessage = "Coming Soon" }) => {
    return (
      <div style={{

      }}>
        {blankMessage}
      </div>
    );
  }

  // Each Project Template Design
  const ProjectDisplay = ({ projectTitle = "" }) => {
    return <div>
      {projectTitle}
    </div>;
  };

  const ProjectCategory = ({ category }) => {
    return (
      <section
        style={{
          "borderRadius": "2px",
          "boxShadow": `2px 2px 8px 3px lightgrey`,
          "color": `${contentColor}`,
          "margin-left": "10px", "margin-top": "15px", "margin-bottom": "25px",
          "padding": "6px"
        }}>
        <h5>{category}</h5>
        {/* List of Personal Projects (Loop) */}
        {/* <ProjectDisplay projectTitle="Sample" /> */}
        {/* Without any project then display empty template */}
        <ProjectBlankMsg blankMessage="Coming Soon..." />
      </section>
    );
  };

  return (
    <div>
      <section style={{ "margin-top": "20px", "text-align": "left" }}>
        <h4 style={{ "font-family": "Trebuchet MS", "font-weight": "bold" }}>
          Projects
        </h4>

        {/* Personal Section */}
        <ProjectCategory category="Personal Projects" />

        {/* Other Works */}
        <ProjectCategory category="Other Projects" />
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
