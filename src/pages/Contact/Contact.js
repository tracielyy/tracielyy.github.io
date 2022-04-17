import { Fragment } from "react";
import React, { useState, useEffect } from "react";

// Import Components
import Container from "../../components/fragment/FragContainer.js";
import Image from "react-bootstrap/Image";
import { SocialIcon } from "react-social-icons";

// Import Resources
import {
  pageBgColor,
  fragBgColor,
  titleColor,
  contentColor,
} from "../../components/config/Color.js";

const ContactDisplay = () => {
  const Social = ({ url, description }) => {
    const size = {
      height: "40px",
      width: "40px",
      margin: "0px 8px 0px 0px",
      "align-self": "center",
    };
    return (
      <div
        style={{
   

          margin: "4px",
        }}
      >
        <SocialIcon
          bgColor={contentColor}
          fgColor={fragBgColor}
          style={size}
          url={url}
        />

        <span
          style={{
            "align-self": "center",
            "word-wrap": "break-word",
            "font-family": "courier new",
            "font-weight": "bold",
            "font-size": "20px",
          }}
        >
          {description}
        </span>
      </div>
    );
  };
  return (
    <section
      style={{
        "margin-top": "10px",
        display: "block",
        "text-align": "left",
      }}
    >
      <Social
        url="https://twitter.com/tracielyy"
        description="https://twitter.com/tracielyy"
      />
      <Social
        url="https://facebook.com/tracielyy"
        description="https://facebook.com/tracielyy"
      />
      <Social
        url="https://github.com/tracielyy"
        description="https://github.com/tracielyy"
      />
      <Social
        url="mailto:yanying@outlook.com"
        description="yanying@outlook.com"
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
