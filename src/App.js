import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import "./App.css";
import theme from "../src/config/theme";
import React, { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SideNave from "./components/SideNav";
import AppHeader from "./components/AppHeader";
import { BrowserRouter } from "react-router-dom";
import AppRouts from "./routers/AppRouts";

const darkTheme = createTheme(theme, {
  palette: { mode: "dark" },
});

const lightTheme = createTheme(theme, {
  palette: { mode: "light" },
});

function App() {
  // for SideBar
  const [layoutDirection, setLayoutDirection] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [themeMode, setThemeMode] = useState("light");

  const ToggleHandler = (e) => {
    setToggled(e);
  };

  const darkmodeHandler = (e) => {
    setThemeMode(e ? "dark" : "light");
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            direction: layoutDirection ? "rtl" : "ltr",
          }}
        >
          <CssBaseline />
          <AppHeader setIsToggled={(e) => ToggleHandler(e)} Mode={themeMode} />
          <Box sx={styles.container}>
            <BrowserRouter>
              <SideNave
                onChangeLatout={(e) => setLayoutDirection(e)}
                isToggled={toggled}
                setIsToggled={(e) => ToggleHandler(e)}
                darkmodeHandler={(e) => darkmodeHandler(e)}
                Mode={themeMode}
              />
              <Box component={"main"} sx={styles.mainSection}>
                <AppRouts />
              </Box>
            </BrowserRouter>
          </Box>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: "flex",
    bgcolor: "neutral.light",
    height: "calc(100% - 64px)",
  },
  mainSection: {
    p: 4,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};
