import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import Components
import Container from "../components/fragment/FragContainer.js";
import Image from "react-bootstrap/Image";

// Import Resources
import {
  pageBgColor,
  fragBgColor,
  titleColor,
  colorAccent,
} from "../components/config/Color.js";
import Myself from "../resources/images/myself.jpg";

import Url from "../components/url/Url.js";

const Hobbies = () => {
  // Array Of Hobbies

  const list = ["Watching drama", "Listening to music", "Coding"];

  return (
    <section>
      <h5>Hobbies</h5>
      <p>
        <ul style={{ "list-style-type": "square" }}>
          {list.map((l) => (
            <li>{l}</li>
          ))}
        </ul>
      </p>
    </section>
  );
};

const Introduction = () => {
  const myAge = "1998/01/25";
  function getMyAge(dateStr /*YYYY/MM/DD*/) {
    let today = new Date();
    let dob = new Date(dateStr);
    let age = today.getFullYear() - dob.getFullYear();
    let month = today.getMonth() - dob.getMonth();

    // Check if past dob
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  }
  const ColoredItalic = styled.span`
    font-style: italic;
    color: ${colorAccent};
  `;
  return (
    <section>
      <h5>Intro</h5>
      <p>
        <span>
          Hi guys, I'm{" "}
          <span style={{ "font-weight": "bold" }}>Tracie Ling.</span>
        </span>{" "}
        <span>
          I am an aspiring software engineer and currently {getMyAge(myAge)}{" "}
          years old. At present a fresh graduate from{" "}
          <Url
            url="https://www.uow.edu.au/"
            description="University Of Wollongong"
          />
          . I am keen in learning new things to improve myself. Being always
          curious, I am attracted to the "puzzle-like" nature of coding that
          brings both joy{" "}
          <ColoredItalic>(when the code just "worked")</ColoredItalic> &amp;
          frustration <ColoredItalic>(when there is a bug)</ColoredItalic> when
          first being introduced to programming in{" "}
          <Url
            url="https://www.rp.edu.sg/"
            description="Republic Polytechnic"
          />
          .
        </span>
      </p>
    </section>
  );
};

// About Me
const AboutContents = () => {
  const figWidth = "160px";
  const figHeight = "160px";

  return (
    <div>
      <section style={{ "margin-top": "20px", "text-align": "left" }}>
        {/* Picture Of Myself */}
        <div style={{ "margin-bottom": "10px" }}>
          <Image
            width={figWidth}
            height={figHeight}
            alt="171x180"
            src={Myself}
            roundedCircle
          />
        </div>
        <div style={{ "margin-left": "10px", "justify-content": "end" }}>
          <h4
            style={{
              "font-family": "Trebuchet MS",
              "font-weight": "bold",
              "margin-bottom": "15px",
            }}
          >
            About Me
          </h4>
          {/* Introduction */}
          <Introduction />
          {/* Hobbies */}
          <Hobbies />
        </div>
      </section>
    </div>
  );
};

const About = () => {
  return (
    <Fragment>
      <Container>
        <AboutContents />
      </Container>
    </Fragment>
  );
};

export default About;
