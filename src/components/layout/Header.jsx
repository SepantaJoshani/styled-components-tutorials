import React from "react";
import styled from "styled-components";
import { uuid } from "../../helper/uuid";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { MaxWidth, PaddingWrapper } from "../common/CommonStyles";
import MoonIcon from "../../assets/images/moon.svg";
import { useMediaQuery } from "react-haiku";
import { motion } from "framer-motion";

const menuLinks = [
  { id: uuid(), content: "خانه" },
  { id: uuid(), content: "درباره ما" },
  { id: uuid(), content: "بلاگ" },
];

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const smDown = useMediaQuery("(max-width: 640px)");

  return (
    <StyledHeader>
      <Nav>
        <Logo>Fronthooks</Logo>
        <Hamburger size={smDown ? 24 : 30} toggled={isOpen} toggle={setOpen} />
        <MenuList isOpen={isOpen}>
          {menuLinks.map(({ id, content }) => (
            <MenuLink key={id}>{content}</MenuLink>
          ))}
          <IconButton
            whileHover={{
              rotate: 45,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <StyledImage src={MoonIcon} alt="moon" />
          </IconButton>
        </MenuList>
      </Nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: ${(p) => p.theme.palette.header};
  ${PaddingWrapper}
`;
const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  ${MaxWidth}

  .hamburger-react {
    color: #242424;
    display: none;
    @media (max-width: ${(p) => p.theme.breakpoints.md}) {
      display: block;
    }
  }
`;
const Logo = styled.a`
  color: ${(p) => p.theme.palette.primary};
  font-size: 1.5rem;
  font-weight: 800;
  font-style: italic;
  cursor: pointer;
`;
const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${(p) => (p.isOpen ? "300px" : "0")};
    transition: all 0.3s ease-in;
    padding: 0 4rem;
    width: 100%;
  }
`;
const MenuLink = styled.a`
  padding: 1rem 1.5rem;
  color: ${(p) => p.theme.palette.text};
  cursor: pointer;

  :hover {
    color: ${(p) => p.theme.palette.primary};
    transition: color 0.3s ease-in;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
    transition: none;
    border-radius: 10px;

    :hover {
      background-color: ${(p) => p.theme.palette.primary};
      color: #fff;
      transition: none;
    }
  }
`;
const IconButton = styled(motion.button)`
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    margin-top: 0;
  }
`;
const StyledImage = styled.img``;
