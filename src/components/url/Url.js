import styled from "styled-components";
import {
    pageBgColor,
    fragBgColor,
    titleColor,
    lineColor,
    colorAccent
  } from "../config/Color.js";

const Url = ({ url, description }) => {
  const Links = styled.a`
    color: ${titleColor};
    &:hover {
      color: ${colorAccent};
    }
  `;
  return (
    <Links href={url} target="_blank">
      {description}
    </Links>
  );
};

export default Url;
