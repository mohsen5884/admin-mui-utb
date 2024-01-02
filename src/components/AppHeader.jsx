import {
  ExitToApp,
  Lan,
  Language,
  MenuTwoTone,
  Notifications,
  Settings,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../config/theme";
import { useTranslation } from "react-i18next";

const lngs = [
  { code: "en", native: "English", direction: "ltr" },
  { code: "fa", native: "فارسی", direction: "rtl" },
];

const AppHeader = ({ setIsToggled, Mode, langHandler, setLayoutDirection }) => {
  const { t, i18n } = useTranslation();
  const [toggled, setToggled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const SelectItemHandler = (code, direction) => {
    setAnchorEl(null);
    langHandler(code);
    if (direction === "rtl") {
      setLayoutDirection(true);
    } else setLayoutDirection(false);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <IconButton id="Notifications" title={t("notifications")} color="secondary">
          <Badge badgeContent={14} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton id="Settings" title={t("settings")} color="secondary">
          <Settings />
        </IconButton>
        <IconButton
          id="Language"
          aria-controls={open ? "Language-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          title={t("selectLanguage")}
          color="secondary"
        >
          <Language />
        </IconButton>
        <Menu
          id="Language-menu"
          MenuListProps={{
            "aria-labelledby": "Language",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem sx={styles.currentLangStyle}>
            {lngs.find((t) => t.code === i18n.language).native}
          </MenuItem>
          <Divider />
          {lngs.map((lng) => (
            <MenuItem
              key={lng.code}
              onClick={() => SelectItemHandler(lng.code, lng.direction)}
              sx={styles.langStyle}
            >
              {lng.native}
            </MenuItem>
          ))}
        </Menu>
        <IconButton id="Exit" title={t("exit")} color="secondary">
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
  lang: {
    color: "neutral.normal",
  },
  currentLangStyle:{
fontSize:"0.9rem",
fontWeight:500,
  },
  langStyle:{
    fontSize:"0.7rem",
  }
};
