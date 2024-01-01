import {
  ExitToApp,
  MenuTwoTone,
  Notifications,
  Settings,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../config/theme";

const AppHeader = ({ setIsToggled, Mode }) => {
  const [toggled, setToggled] = useState(false);

  const toggledHandler = () => {
    setToggled(!toggled);
    setIsToggled(toggled);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor:
          Mode === "dark"
            ? theme.palette.primary.dark
            : theme.palette.primary.light,
      }}
    >
      <Toolbar>
        <IconButton
          onClick={toggledHandler}
          color="secondary"
          sx={{ display: { sm: "unset", md: "none" } }}
        >
          <MenuTwoTone />
        </IconButton>
        <Box
          component="img"
          sx={styles.appLogo}
          src={require("../assets/logo.png")}
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton title="Notifications" color="secondary">
          <Badge badgeContent={14} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton title="Settings" color="secondary">
          <Settings />
        </IconButton>
        <IconButton title="Settings" color="secondary">
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {},
  appLogo: {
    borderRadius: 2,
    width: 150,
    ml: 2,
    cursor: "pointer",
  },
};
