// React Libraries
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Config Files
import {
  pageBgColor,
  fragBgColor,
  titleColor,
  lineColor,
} from "../config/Color.js";
import ScrollToTop from "../config/ScrollToTop.js";

// Import Pages
import Home from "../../pages/Home.js";
import Resume from "../../pages/Resume.js";
import Projects from "../../pages/Projects.js";
import Contact from "../../pages/Contact.js";
import About from "../../pages/About.js";

// Import Resources
// Sequence of the import in {} is very important
import {
  IconContainer,
  NavIcon,
  NavLine,
  NavBar,
  NavLink,
  NavDivider,
  RegLoginBtn,
} from "./NavigationElements";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";



// Navigation Component
const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <NavBar collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>
          <img src="android-chrome-512x512.png" height="40" width="40" />
          <span style={{ margin: "0px 10px", "font-family": "Lucida Console" }}>
            Tracie
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  onClick={() => setOpen(!open)}/>
        <NavBar.Collapse id="responsive-navbar-nav" in={open}>
          <Nav
            className="me-auto"
            style={{ "justify-content": "end", width: "100%" }}
          >
            {/* About */}
            <NavLink
              id="active"
              as={Link}
              to={`${process.env.PUBLIC_URL}/about`}
              className="nav-link active"
              onClick={() => setOpen(!open)}
            >
              About
            </NavLink>
            {/* Resume */}
            <NavLink
              id="active"
              as={Link}
              to={`${process.env.PUBLIC_URL}/resume`}
              className="nav-link active"
              onClick={() => setOpen(!open)}
            >
              Resume
            </NavLink>
            {/* Project */}
            <NavLink
              to={`${process.env.PUBLIC_URL}/projects`}
              className="nav-link active"
              onClick={() => setOpen(!open)}
            >
              Project
            </NavLink>
            <NavLink
              as={Nav.Link}
              href={`https://github.com/tracielyy`}
              target="_blank"
              className="nav-link active"
              onClick={() => setOpen(!open)}
            >
              GitHub
            </NavLink>

            {/* Contact */}
            <NavLink
              id="active"
              as={Link}
              to={`${process.env.PUBLIC_URL}/contact`}
              className="nav-link active"
              onClick={() => setOpen(!open)}
            >
              Contact
            </NavLink>
          </Nav>
        </NavBar.Collapse>
      </NavBar>
      <ScrollToTop />
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
        <Route
          path={`${process.env.PUBLIC_URL}/about`}
          exact
          component={About}
        />

        <Route path={`${process.env.PUBLIC_URL}/resume`} component={Resume} />
        <Route
          path={`${process.env.PUBLIC_URL}/projects`}
          component={Projects}
        />
        <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
      </Switch>
    </Router>
  );
};

export default Navigation;
