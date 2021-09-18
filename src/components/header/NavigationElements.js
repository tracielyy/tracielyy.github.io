// Libraries
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Resources
import {pageBgColor, fragBgColor, titleColor, lineColor} from "../../components/color/Color.js"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const media_max_width = "800px";
const nav_height = "38px";

// Hold Icon
export const IconContainer = styled(Link)`


`;


// Navigation Bar
export const NavBar = styled(Navbar)`

	background-color: ${titleColor};
	padding-right: 10px;
	padding-left: 10px;
	

`;


// Navigation Links
export const NavLink = styled(Link)`

	font-family:monospace;
	margin:auto;

`;

// Horizontal Line Encasing The Navigation Bar
export const NavLine = styled.hr`

	background-color: ${pageBgColor};
    border:none;height:4px;
    margin-top:0px;
    margin-bottom:0px;
`;

// Vertical Line Separating Each Navigation Link
export const NavDivider = styled.div`

	background-color:#EDF4F6;
    height:15px;
    margin: 7px 0px;
    width:2px;

    @media only screen and (max-width: ${media_max_width}) {
        display:none;
    }
`;

// Register/Login
export const RegLoginBtn = styled.button`

	background-color:transparent;
	border:1.5px solid ${fragBgColor};
    border-radius: 4px;
    float:right;
    margin:50px 30px 0 0;
    padding:10px;

    @media only screen and (max-width: ${media_max_width}) {
        
    }


`;