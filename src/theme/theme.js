export const lightTheme = () => ({
  palette: {
    primary: "#661bcf",
    gradient:
      "linear-gradient(333deg, rgb(43, 1, 121) 0%, rgb(43, 1, 121) 0%, rgb(121, 56, 242) 100%, rgb(121, 56, 242) 100%);",
    secondary: "#0c9c3f",
    header: "#fff",
    footer: "#fff",
    text: "#000",
    link: "#1d4ed8",
    underline: "rgb(233 213 255)",
    body: "#fafafa",
    cardBg: "#fff",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1536px",
  },
});

export const darkTheme = () => ({
  ...lightTheme(),
  palette: {
    primary: "#661bcf",
    gradient:
      "linear-gradient(333deg, rgb(43, 1, 121) 0%, rgb(43, 1, 121) 0%, rgb(121, 56, 242) 100%, rgb(121, 56, 242) 100%);",
    secondary: "#0c9c3f",
    header: "#0f172a",
    footer: "#1e293b",
    text: "#fff",
    link: "#38bdf8",
    underline: "#38bdf8",
    body: "#0f172a",
    cardBg: "#334155",
  },
});
