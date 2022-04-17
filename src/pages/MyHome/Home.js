import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

// Import Components
import Container from "../../components/fragment/FragContainer.js";
import Image from "react-bootstrap/Image";

// Import Resources
import {
  pageBgColor,
  fragBgColor,
  titleColor,
  colorAccent,
} from "../../components/config/Color.js";




const HomeBillboard = ({ notice = "Coming Soon" }) => {
  return (
    <div>
      <p style={{ "fontSize": "50px", "marginTop": "60px" }}>
        {/* {notice} */}
      </p>
    </div>
  );
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
