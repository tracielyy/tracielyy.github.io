import { Fragment } from "react";
import React, { useState, useEffect } from "react";

// Import Components
import Container from "../components/fragment/FragContainer.js";
import Image from "react-bootstrap/Image";
import { SocialIcon } from "react-social-icons";

// Import Resources
import {
  pageBgColor,
  fragBgColor,
  titleColor,
  contentColor,
} from "../components/config/Color.js";

const ContactDisplay = () => {
  const size = {
    height: "25px",
    width: "25px",
    margin: "0px 10px 0px 0px",
  };
  return (
    <section style={{ "margin-top": "10px" , "display":"block"}}>
      <SocialIcon
        bgColor={contentColor}
        fgColor={fragBgColor}
        style={size}
        url="https://twitter.com/tracielyy"
      />
      {" @tracielyy "}
      <SocialIcon
        bgColor={contentColor}
        fgColor={fragBgColor}
        style={size}
        url="https://facebook.com/tracielyy"
      />
    </section>
  );
};

const Contact = () => {
  return (
    <Fragment>
      <Container>
        <ContactDisplay />
      </Container>
    </Fragment>
  );
};

export default Contact;
