import React, { useState } from "react";
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider,
} from "styled-components";
import {
  rotateAnimation,
  sectionPadding,
} from "./components/common/CommonStyles";
import ViteImg from "./favicon.svg";
import { theme } from "./theme/theme";

const App = () => {
  const [isError, setIsError] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        {/* <Button lg onClick={() => setIsError((prev) => !prev)} error={isError}>
          Click M3
        </Button> */}
        <ImgContainer />
      </Container>
    </ThemeProvider>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}


body {
  background-color: gray;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`;

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`;

const ImgContainer = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${ViteImg});
  background-size: cover;
  background-repeat: no-repeat;
  /* ${rotateAnimation} */
`;

const lgStyles = (p) => {
  if (p.lg)
    return css`
      padding: 1.5rem 2rem;
      font-size: 1.5rem;
      border-radius: 1rem;
    `;

  return css`
    padding: 1rem 1.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
  `;
};



const Button = styled.button`
  position: relative;
  overflow: hidden;
  color: #fff;
  background-color: ${(p) => (p.error ? "red" : "orange")};
  ${lgStyles}
  border: 0;
  outline: 0;

  

  @media (max-width: ${(p) => p.theme.breakpoints.lg}) {
    background-color: ${(p) => p.theme.palette.secondary};
  }
`;
