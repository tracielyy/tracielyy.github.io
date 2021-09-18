import { SocialIcon } from 'react-social-icons';
import styled from "styled-components";

import {pageBgColor, fragBgColor, contentColor} from "../../components/color/Color.js";


// Social Networking Site
export const SocialContainer = () => {
    const size = {
        height: "25px",
        width: "25px",
        margin: "0px 10px 0px 0px"
    }
    const Container = styled.div`
        border: 2px solid black;
        width: 70%;
        height: 30px;
        line-height:25px;
        margin-left:auto;
        margin-right:auto;

    `;
    return (
        <Container>
            <SocialIcon bgColor={fragBgColor} fgColor={contentColor} style={size} url="https://twitter.com/tracielyy" />
            <SocialIcon bgColor={fragBgColor} fgColor={contentColor} style={size} url="https://facebook.com/tracielyy" />
        </Container>
    );
}

// Address and Phone
export const ContactContainer = () => {
    const Container = styled.div`
        margin-left:auto;
        margin-right:auto;
        margin-top:5px;
        width:70%;
        border:2px solid orange;
        color: ${contentColor}
    `;


    return (
        <Container>
            <div>123 Road Forest Dark Cliff Building SocialACtivity Block</div>
            <div>+65 9123 4566</div>
        </Container>
    );
}


export const FooterContainer = styled.footer`
    padding: 15px 30px;
    background-color: ${pageBgColor};
    color:white;
`;

export const DesignByContainer = styled.div`
    background-color:${pageBgColor};
    color:${contentColor};
    padding: 10px 20px;
    text-align:center;
    font-family: Monospace;
    font-size:12px;
`;

