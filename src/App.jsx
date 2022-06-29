import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout, Hero, Courses, StyledButton } from "./components";
import { GlobalStyles } from "./GlobalStyle";

import { lightTheme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Layout>
        <Hero />
        <StyledButton>کلیک کن</StyledButton>
        <Courses />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
