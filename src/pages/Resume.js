import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import "./Resume.css";

// Import Components
import Container from "../components/fragment/FragContainer.js";
import ProgressBar from "react-bootstrap/ProgressBar";
import styled from "styled-components";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import { Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { HiCheckCircle } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";

import {
  pageBgColor,
  fragBgColor,
  contentColor,
  titleColor,
  colorAccent,
  lineColor,
  subContentColor,
} from "../components/color/Color.js";

const Education = ({ course, school, duration, description }) => {
  return (
    <section style={{ "margin-bottom": "60px" }}>
      <h4
        style={{
          "font-weight": "bold",
          color: titleColor,
          "font-family": "arial",
        }}
      >
        {course}
      </h4>
      <h5 style={{ color: contentColor }}>{school}</h5>
      <div style={{ "font-style": "italic", color: colorAccent }}>
        {duration}
      </div>
      <div>
        {description.map((desc) => (
          <div style={{ display: "flex" }}>
            <HiCheckCircle
              style={{
                color: colorAccent,
                "align-self": "center",
                "margin-right": "3px",
              }}
            />
            <span>{desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Experience = ({ jobTitle, company, duration, description }) => {
  return (
    <section>
      <h5>
        {jobTitle}
        <span
          style={{
            color: colorAccent,
            "font-family": "trebuchet ms",
            "font-weight": "bold",
            "margin-left": "3px",
          }}
        >
          <span style={{ margin: "0px 4px" }}>@</span>
          {company}
        </span>
      </h5>
      <div style={{ "font-style": "italic" }}>{duration}</div>
      <div>
        {description.map((desc) => (
          <div style={{ display: "flex" }}>
            <GoPrimitiveDot
              style={{
                color: colorAccent,
                "align-self": "center",
                "margin-right": "3px",
              }}
            />
            <span>{desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Skills = ({ name, rating }) => {
  return (
    <section>
      <span>{name}</span>
      <ProgressBar
        striped
        now={rating}
        min={1}
        max={10}
        variant={"programming"}
        style={{ width: "50%", height: "20px", "margin-bottom": "10px"}}
      />
    </section>
  );
};

// Education Body Contents
const Contents = () => {
  const ResumeContents = styled.div`
    text-align: left;
    margin-top: 30px;
  `;

  const steJobDesc = [
    "Testing of software functions like account creation and report generation in our client company",
    "Writing documentation for test case steps",
    "Log identified issues in JIRA and retest fixed functions.",
    "Communicate and collaborate with developers on daily basis to fix identified issues.",
  ];

  // Education
  const rpDesc = [
    "Knowledge On Information System",
    "Marketing Theories and Knowledge",
  ];

  const uowDesc = [
    "Basic Knowledge On Cyber Security",
    "Basic Object Oriented Programming Knowledge",
    "Software Development",
  ];

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
                <Nav.Link eventKey="experience">Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="skills">Skills</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {/* Education */}
              <Tab.Pane eventKey="education">
                {/* Polytechnic */}
                <Education
                  course="Diploma in Business Information System"
                  school="Republic Polytechnic"
                  duration="2015 - 2018"
                  description={rpDesc}
                />
                {/* University */}
                <Education
                  course="Bachelor of Computer Science (Cyber Security)"
                  school="University Of Wollongong"
                  duration="2019 - 2021"
                  description={uowDesc}
                />
              </Tab.Pane>

              {/* Experience */}
              <Tab.Pane eventKey="experience">
                <Experience
                  jobTitle="Software Test Engineer"
                  company="Pactera Singapore Pte Ltd"
                  duration="Mar 2017 - Jul 2017"
                  description={steJobDesc}
                />
              </Tab.Pane>

              {/* Skills */}
              <Tab.Pane eventKey="skills">
                <Skills name="Python" rating="2" />
                <Skills name="Javascript" rating="4"/>
                <Skills name="Java" rating="4"/>
                <Skills name="C++" rating="3"/>
                <Skills name="HTML" rating="5"/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </ResumeContents>
  );
};

const Resume = () => {
  const ResumeTitle = styled.h2`
    color: ${contentColor};
    font-family: "arial";
    text-align: left;
    text-decoration: underline;
  `;
  return (
    <Fragment>
      <Container>
        <ResumeTitle>Resume</ResumeTitle>
        <Contents />
      </Container>
    </Fragment>
  );
};

export default Resume;
