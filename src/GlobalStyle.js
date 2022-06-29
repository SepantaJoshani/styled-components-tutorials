import { createGlobalStyle } from "styled-components";
import Vazir from "./assets/fonts/Vazir.woff2";

export const GlobalStyles = createGlobalStyle`


@font-face {
    font-family:"Vazir" ;
    src: url(${Vazir});
}

*{
  margin:0;
  padding: 0;
  direction: rtl;
  text-align: right;
  

}
body{

  font-family: "Vazir";
  background: ${(p) => p.theme.palette.body};
  
}
a{
  color: ${(p) => p.theme.palette.link};
  text-decoration: none;
}
`;
