import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      text-align: center;
      font-size: 60px;
      font-weight: 700;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      text-align: center;
      font-size: 40px;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      text-align: center;
      font-size: 30px;
      font-weight: 500;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      text-align: center;
      font-size: 30px;
      font-weight: 500;
    `}
`;

export default Heading;
