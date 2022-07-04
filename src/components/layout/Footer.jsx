import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <Typography>Made with ❤️ by Sepanta</Typography>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.palette.footer};
  margin-top: 6rem;
  min-height: 10vh;
`;

const Typography = styled.p`
  color: ${(p) => p.theme.palette.text};
  font-size: 1.2rem;
  text-align: center;
`;
