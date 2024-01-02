import { createTheme } from "@mui/material";
import * as gray from "./colors/PaafGray";
import * as green from "./colors/PaafGreen";
import * as red from "./colors/PaafRed";

const Black = "#000000";
const White = "#FFFFFF";

let theme = createTheme({
  palette: {
    primary: {
      main: gray["c500"],
      normal: gray["c500"],
    },
    secondary: {
      main: gray["c050"],
    },
    neutral: {
      light: gray["c050"],
      medium: gray["c200"],
      normal: gray["c700"],
      main: gray["c900"],
    },
    green: {
      main: green["c800"],
    },

  },
});

theme = createTheme(theme, {
  typography: {
    link: {
      fontSize: "0.9rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
      fontWeight: 500,
      color: theme.palette.primary.normal,
      display: "block",
      cursor: "pointer",
    },
    cardTitle: {
      fontSize: "1.2rem",
      display: "block",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
    },
    h7: {
      fontSize: "0.9rem",
    },
    h8: {
      fontSize: "0.7rem",
    },
    body2:{
      fontSize: "1.2rem",
    },
    overline:{
      fontSize:"0.9rem"
    }
  },
});

export default theme;
