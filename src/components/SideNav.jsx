import {
  AnalyticsOutlined,
  DashboardOutlined,
  Equalizer,
  Settings,
  SourceOutlined,
  StyleOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import theme from "../config/theme";
import RgbToRgba from "../functions/RgbToRgba";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { main } from "../config/colors/PaafGray";


const SideNav = ({
  onChangeLatout,
  layoutDirection,
  isToggled,
  setIsToggled,
  darkmodeHandler,
  Mode,
}) => {
  // for SideBar
  const [collapsed, setCollapsed] = useState(false);
  // const [rtl, setRtl] = useState(false);
  const { t, i18n } = useTranslation();
  const [hasImage, setHasImage] = useState(false);

  // handle on RTL change event
  const handleRTLChange = (e) => {
    // setRtl(e.target.checked);
    onChangeLatout(e.target.checked);
  };

  // handle on image change event
  const handleImageChange = (e) => {
    setHasImage(e.target.checked);
  };

  const modeHandler = (e) => {
    darkmodeHandler(e.target.checked);
    if (e.target.checked) {
      theme.palette.mode = "dark";
    } else {
      theme.palette.mode = "dark";
    }
  };

  const location = useLocation();
  return (
    <Sidebar
      collapsed={collapsed}
      toggled={isToggled}
      onBackdropClick={() => setIsToggled(false)}
      image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
      rtl={layoutDirection}
      style={{ height: "100%", top: "auto" }}
      breakPoint="md"
      backgroundColor={
        Mode === "dark"
          ? RgbToRgba(theme.palette.primary.dark, hasImage ? 0.6 : 1)
          : RgbToRgba(theme.palette.primary.light, hasImage ? 0.6 : 1)
      }
    >
      <Box sx={styles.avatarContainer}>
        <Avatar
          sx={styles.avatar}
          alt="Channel Name"
          src={require("../assets/images/accounts/myimage.JPG")}
        />
        {!collapsed && (
          <Typography variant="body2" sx={styles.yourChannel}>
            {t("agentPanel")}
          </Typography>
        )}
        {!collapsed && (
          <Typography variant="overline">{t("yourName")}</Typography>
        )}
      </Box>
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              backgroundColor: active
                ? theme.palette.neutral.medium
                : undefined,
            };
          },
        }}
      >
        <MenuItem
          active={location.pathname === "/"}
          component={<Link to="/" />}
          icon={<DashboardOutlined />}
        >
          <Typography variant="body2">{t("dashboard")}</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/Content"}
          component={<Link to="/Content" />}
          icon={<SourceOutlined />}
        >
          <Typography variant="body2">{t("communications")}</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/Analytic"}
          component={<Link to="/Analytic" />}
          icon={<AnalyticsOutlined />}
        >
          <Typography variant="body2">{t("salesAnalytics")}</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/Customization"}
          component={<Link to="/Customization" />}
          icon={<StyleOutlined />}
        >
          <Typography variant="body2">{t("announcements")}</Typography>
        </MenuItem>
        <SubMenu label={t("charts")} icon={<Equalizer />}>
          <Box
            backgroundColor={
              Mode === "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.light
            }
          >
            <MenuItem>{t("pieCharts")}</MenuItem>
            <MenuItem>{t("lineCharts")}</MenuItem>
          </Box>
        </SubMenu>
        <SubMenu label={t("settings")} icon={<Settings />}>
          <Box
            backgroundColor={
              Mode === "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.light
            }
          >
            <MenuItem title={t("collapse")}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">{t("collapse")}</Typography>
                <Switch
                  id="collapse"
                  checked={collapsed}
                  onChange={() => setCollapsed(!collapsed)}
                  label="Collapse"
                />
              </Box>
            </MenuItem>
            <MenuItem title={t("rtl")}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">{t("rtl")}</Typography>
                <Switch
                  id="rtl"
                  checked={layoutDirection}
                  onChange={handleRTLChange}
                  label="Change layout"
                />
              </Box>
            </MenuItem>
            <MenuItem title={t("darkMode")}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">{t("darkMode")}</Typography>
                <Switch
                  id="darkMode"
                  checked={Mode === "dark" ? true : false}
                  onChange={modeHandler}
                  label="Dark Mode"
                />
              </Box>
            </MenuItem>
            <MenuItem title={t("imageBackMenu")}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">{t("imageBackMenu")}</Typography>
                <Switch
                  id="imageBackground"
                  checked={hasImage}
                  onChange={handleImageChange}
                  label="Image"
                />
              </Box>
            </MenuItem>
          </Box>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default SideNav;

/** @type {import("@mui/material").SxProps} */
const styles = {
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    my: 5,
  },
  avatar: {
    width: "40%",
    height: "auto",
  },
  yourChannel: {
    mt: 2,
  },
};
