import { SocialIcon } from 'react-social-icons';
import styled from "styled-components";

import {pageBgColor, fragBgColor, contentColor} from "../../components/config/Color.js";


// Social Networking Site
export const SocialContainer = () => {
    const size = {
        height: "25px",
        width: "25px",
        margin: "0px 10px 0px 0px"
    }
    const Container = styled.div`

        width: 70%;
        line-height:25px;
        margin-left:auto;
        margin-right:auto;
        padding: 2px;

    `;
    return (
        <Container>
            <SocialIcon bgColor={contentColor} fgColor={fragBgColor} style={size} url="https://twitter.com/tracielyy" />
            <SocialIcon bgColor={contentColor} fgColor={fragBgColor} style={size} url="https://facebook.com/tracielyy" />
        </Container>
    );
}

// Address and Phone
export const ContactContainer = () => {
    const Container = styled.div`

        color: ${contentColor};
        font-family: 'consolas';
        margin-left:auto;
        margin-right:auto;
        margin-top:5px;
        width:70%;

        
    `;


    return (
        <Container>
            <div>yanying25@outlook.com</div>
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

