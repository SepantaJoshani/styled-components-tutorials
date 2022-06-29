import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyle";

import { lightTheme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <h1>شروع</h1>
    </ThemeProvider>
  );
};

export default App;
