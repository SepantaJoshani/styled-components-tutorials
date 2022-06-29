import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/global-styles/GlobalStyles";
import { data } from "./data/data";
import { theme } from "./theme/theme";

const boxVariants = {
  hidden: { opacity: 0 },
  show: (t) => ({ opacity: 1, transition: { delay: 0.2 * t } }),
  exit: { opacity: 0, x: "-100vh", transition: { duration: 1 } },
};

const App = () => {
  const [products, setProducts] = useState(data);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <AnimatePresence>
          {products.map(({ id, name }, i) => (
            <Box
              // layoutId={id}
              onClick={() => setProducts(products.filter((p) => p.id !== id))}
              key={id}
              custom={i}
              variants={boxVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <h2>{name}</h2>
            </Box>
          ))}
        </AnimatePresence>
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 20rem;
  height: 8rem;
  border-radius: 0.5rem;
  h2 {
    font-style: italic;
  }
`;
