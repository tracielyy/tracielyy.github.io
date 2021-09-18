import { Fragment } from "react";
import React, { useState, useEffect } from "react";

// Import Components
import Container from "../components/fragment/FragContainer.js";
import styled from "styled-components";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import { Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  pageBgColor,
  fragBgColor,
  contentColor,
} from "../components/color/Color.js";

const Title = () => {
  const ResumeTitle = styled.h2`
    color: ${contentColor};
    font-family: "arial";
    text-align: left;
  `;
  return (
    <div>
      <ResumeTitle>Resume</ResumeTitle>
    </div>
  );
};

// Education Body Contents
const Contents = () => {
  const ResumeContents = styled.div`
    text-align: left;
    margin-top: 30px;
  `;

  const ContentTitle = styled.h5``;

  const Education = () =>{
      return (
        <section>
            
        </section>
      );

  }

  return (
    <ResumeContents>
      <Tab.Container id="left-tabs-example" defaultActiveKey="skills">
        <Row>
          <Col sm={3}>
            {/* The little tabs at the left side */}
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="education">Education</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="skills">Skills</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="education">
                <div>Hi</div>
              </Tab.Pane>
              <Tab.Pane eventKey="skills">
                <div>Hi adsdf</div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </ResumeContents>
  );
};

const Resume = () => {
  return (
    <Fragment>
      <Container>
        <Title />
        <Contents />
      </Container>
    </Fragment>
  );
};

export default Resume;
