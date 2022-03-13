import styled from "styled-components"

// Import Resources
import {fragBgColor, lineColor} from "../config/Color.js"


export const BillboardContainer = styled.div`

`;

const FragContainer = styled.div`

    background-color: ${fragBgColor};
    border:1px solid ${lineColor};
    height: auto;
    hyphens: auto;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    margin: 3%;
    min-height: 100vh;
    overflow-wrap:break-word;
    padding: 30px 50px;
    white-space:normal;

`;

export default FragContainer