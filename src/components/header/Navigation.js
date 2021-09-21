// React Libraries

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Pages
import Home from "../../pages/Home.js";
import Resume from "../../pages/Resume.js";
import Projects from "../../pages/Projects.js";

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
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  pageBgColor,
  fragBgColor,
  titleColor,
  lineColor,
} from "../../components/color/Color.js";

// Navigation Component
const Navigation = () => {
  return (
    <Router>
      <NavBar collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>
          <img src="android-chrome-512x512.png" height="40" width="40"/>
          <span style={{"margin": "0px 10px", "font-family": "Lucida Console"}}>Tracie</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav
            className="me-auto"
            style={{ "justify-content": "end", width: "100%" }}
          >
            {/* Resume */}
            <NavLink
              id="active"
              as={Link}
              to={`${process.env.PUBLIC_URL}/resume`}
              className="nav-link"
            >
              Resume
            </NavLink>
            {/* Project */}
            <NavLink
              to={`${process.env.PUBLIC_URL}/projects`}
              className="nav-link"
            >
              Project
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </NavBar>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
        <Route path={`${process.env.PUBLIC_URL}/resume`} component={Resume} />
        <Route
          path={`${process.env.PUBLIC_URL}/projects`}
          component={Projects}
        />
      </Switch>
    </Router>
  );
};

export default Navigation;
