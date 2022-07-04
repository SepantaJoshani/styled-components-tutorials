import { uuid } from "../../helper/uuid";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
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
import { MoonIcon, SunIcon } from "../../assets/images";
import useDark from "../../hooks/useDark";

const menuLinks = [
  { id: uuid(), content: "خانه" },
  { id: uuid(), content: "درباره ما" },
  { id: uuid(), content: "بلاگ" },
];

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { theme, toggleTheme } = useDark();
  const smDown = useMediaQuery("(max-width: 640px)");

  return (
    <StyledHeader>
      <Nav>
        <Logo>Fronthooks</Logo>
        <Hamburger
          color={theme === "light" ? "#242424" : "#fff"}
          size={smDown ? 24 : 30}
          toggled={isOpen}
          toggle={setOpen}
        />
        <MenuList isOpen={isOpen}>
          {menuLinks.map(({ id, content }) => (
            <MenuLink key={id}>{content}</MenuLink>
          ))}
          <IconButton
            onClick={toggleTheme}
            whileHover={{
              rotate: 45,
            }}
          >
            <StyledImage
              src={theme === "light" ? MoonIcon : SunIcon}
              alt="moon"
            />
          </IconButton>
        </MenuList>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
