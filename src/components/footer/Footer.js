// Import Elements
import { FooterContainer, SocialContainer, ContactContainer, DesignByContainer } from "./FooterElements.js"

// Main Footer
const Footer = () => {

    return (
        <>
            <FooterContainer>
                <SocialContainer />
                <ContactContainer />
            </FooterContainer>
            <DesignByContainer>Designed & Developed By Tracie</DesignByContainer>
        </>
    );
}

export default Footer