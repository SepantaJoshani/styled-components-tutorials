import { uuid } from "../../helper/uuid";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import MoonIcon from "../../assets/images/moon.svg";
import { useMediaQuery } from "react-haiku";
import {
  IconButton,
  Logo,
  MenuLink,
  MenuList,
  Nav,
  StyledHeader,
  StyledImage,
} from "./Header.styled";

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
