import styled from "styled-components";
import { motion } from "framer-motion";
import { PaddingWrapper, MaxWidth } from "../common/CommonStyles";

export const StyledHeader = styled.header`
  background-color: ${(p) => p.theme.palette.header};
  ${PaddingWrapper}
`;
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  ${MaxWidth}

  .hamburger-react {
    
    display: none;
    @media (max-width: ${(p) => p.theme.breakpoints.md}) {
      display: block;
    }
  }
`;
export const Logo = styled.a`
  color: ${(p) => p.theme.palette.primary};
  font-size: 1.5rem;
  font-weight: 800;
  font-style: italic;
  cursor: pointer;
`;
export const MenuList = styled.div`
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
export const MenuLink = styled.a`
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
export const IconButton = styled(motion.button)`
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
export const StyledImage = styled.img``;
