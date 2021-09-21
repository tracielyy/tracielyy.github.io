import { Fragment } from "react";
import React, { useState, useEffect } from "react";

// Import Components
import Container from "../components/fragment/FragContainer.js";
import Figure from "react-bootstrap/Figure";

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

const HomeBillboard = () => {
  return <div></div>;
};

// Home Body Contents
const HomeContents = () => {
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
  const figWidth = 170;
  const figHeight = 180;
  return (
    <div>
      <section style={{ "margin-top": "20px", "text-align": "left" }}>
        {/* Picture Of Myself */}
        <Figure>
          <Figure.Image
            width={figWidth}
            height={figHeight}
            alt="171x180"
            src="android-chrome-512x512.png"
            roundedCircle
          />
          <Figure.Caption style={{ width: figWidth, "text-align": "center" }}>
            Tracie Ling Yan Ying
          </Figure.Caption>
        </Figure>
        <div style={{"margin-left": "25px"}}>
          <h4 style={{ "font-family": "Trebuchet MS", "font-weight": "bold" }}>
            About Me
          </h4>
          <p>
            <span>Hi guys, I'm Tracie Ling.</span>{" "}
            <span>
              I am an aspiring software engineer and currently {getMyAge(myAge)}{" "}
              years old.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

const Home = () => {
  return (
    <Fragment>
      <Container>
        <HomeBillboard />
        <HomeContents />
      </Container>
    </Fragment>
  );
};

export default Home;
