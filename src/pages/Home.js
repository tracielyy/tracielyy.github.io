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


const HomeBillboard = () => {
  return <div></div>;
};


const Home = () => {
  return (
    <Fragment>
      <Container>
        <HomeBillboard />
      </Container>
    </Fragment>
  );
};

export default Home;
