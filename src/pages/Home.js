import { Fragment } from "react";
import React, { useState, useEffect } from "react";

// Import Components
import Container from "../components/fragment/FragContainer.js";
import Image from "react-bootstrap/Image";

// Import Resources
import {
  pageBgColor,
  fragBgColor,
  titleColor,
} from "../components/color/Color.js";
import Myself from "../resources/images/myself.jpg";

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
  const figWidth = 280;
  const figHeight = 280;
  return (
    <div>
      <section style={{ "margin-top": "20px", "text-align": "left" }}>
        {/* Picture Of Myself */}
        <div style={{"margin-bottom": "10px"}}>
          <Image
            width={figWidth}
            height={figHeight}
            alt="171x180"
            src={Myself}
            roundedCircle
          />
        </div>
        <div style={{ "margin-left": "10px" , "justify-content": "end"}}>
          <h4 style={{ "font-family": "Trebuchet MS", "font-weight": "bold" }}>
            About Me
          </h4>
          <p>
            <span >Hi guys, I'm <span style={{"font-weight": "bold"}}>Tracie Ling.</span></span>{" "}
            <span>
              I am an aspiring software engineer and currently {getMyAge(myAge)}{" "}
              years old. At present a fresh graduate from University Of Wollongong.
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
