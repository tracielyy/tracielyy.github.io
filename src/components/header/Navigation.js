// React Libraries

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Pages
import Home from "../../pages/Home.js";
import Resume from "../../pages/Resume.js";

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
import {pageBgColor, fragBgColor, titleColor, lineColor} from "../../components/color/Color.js"

// Navigation Component
const Navigation = () => {
  return (
    <Router>
      <NavBar collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>
          Tracie Ling
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{'float': 'right'}}>
            {/* Resume */}
            <NavLink id="active" to={`${process.env.PUBLIC_URL}/resume`} className="nav-link">
              Resume
            </NavLink>
            {/* Project */}
            <NavLink  to={`${process.env.PUBLIC_URL}/`} className="nav-link">Project</NavLink>
          </Nav>
        </Navbar.Collapse>
      </NavBar>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
        <Route path={`${process.env.PUBLIC_URL}/resume`} component={Resume} />
      </Switch>
    </Router>
  );
};

export default Navigation;
