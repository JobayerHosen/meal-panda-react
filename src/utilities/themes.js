import { createTheme } from "@mui/material/styles";

const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EA7C69",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9288E0",
      contrastText: "#fff",
    },
    dark: {
      main: "#252836",
      contrastText: "#fff",
    },
    background: {
      paper: "#1f1d2b",
      default: "#252836",
      contrastText: "#ddd",
    },
    text: {
      primary: "#fff",
      secondary: "#fffa",
      disabled: "#fff8",
    },
  },
});

const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EA7C69",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9288E0",
      contrastText: "#fff",
    },
    dark: {
      main: "#252836",
      contrastText: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#f3f3f3",
      contrastText: "#252836",
    },
  },
});

export { dark, light };
