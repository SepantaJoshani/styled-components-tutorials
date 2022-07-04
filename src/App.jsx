import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Layout, Hero, Courses, StyledButton } from "./components";
import { GlobalStyles } from "./GlobalStyle";
import { data, filteringLogic } from "./helper";
import useDark from "./hooks/useDark";
import { darkTheme, lightTheme } from "./theme/theme";

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(data);
  const { theme: localTheme } = useDark();

  const allProducts = () => setFilteredProducts(data);

  const showJSHandler = () => {
    const filteredData = filteringLogic(data, "js");
    setFilteredProducts(filteredData);
    console.log(filteredData);
  };
  const showCssHandler = () => {
    const filteredData = filteringLogic(data, "css");
    setFilteredProducts(filteredData);
    console.log(filteredData);
  };

  const activeTheme = localTheme === "light" ? lightTheme() : darkTheme();

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyles />
      <Layout>
        <Hero />
        <Courses
          products={filteredProducts}
          showAll={allProducts}
          showJS={showJSHandler}
          showCss={showCssHandler}
        />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
