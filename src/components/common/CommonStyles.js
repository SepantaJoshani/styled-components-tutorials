import { css, keyframes } from "styled-components";

const rotate = keyframes`
  
from{
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}

`;

export const sectionPadding = css`
  padding: 0 24px;

  @media (min-width: 640px) {
    padding: 0 48px;
  }
  @media (min-width: 1024px) {
    padding: 0 96px;
  }
`;

export const rotateAnimation = css`
  animation: ${rotate} 10s linear infinite;
`;
