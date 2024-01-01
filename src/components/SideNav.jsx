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

const SideNav = ({
  onChangeLatout,
  isToggled,
  setIsToggled,
  darkmodeHandler,
  Mode,
}) => {
  // for SideBar
  const [collapsed, setCollapsed] = useState(false);
  const [rtl, setRtl] = useState(false);
  const [hasImage, setHasImage] = useState(false);

  // handle on RTL change event
  const handleRTLChange = (e) => {
    setRtl(e.target.checked);
    onChangeLatout(e.target.checked);
  };

  // handle on image change event
  const handleImageChange = (e) => {
    setHasImage(e.target.checked);
    console.log(theme.palette.primary.light);
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
      rtl={rtl}
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
          src={require("../assets/images/products/Furniture2.png")}
        />
        {!collapsed && (
          <Typography variant="body2" sx={styles.yourChannel}>
            Your Channel
          </Typography>
        )}
        {!collapsed && (
          <Typography variant="overline">React with Mohsen</Typography>
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
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/Content"}
          component={<Link to="/Content" />}
          icon={<SourceOutlined />}
        >
          <Typography variant="body2">Content</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/Analytic"}
          component={<Link to="/Analytic" />}
          icon={<AnalyticsOutlined />}
        >
          <Typography variant="body2">Analytics</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/Customization"}
          component={<Link to="/Customization" />}
          icon={<StyleOutlined />}
        >
          <Typography variant="body2">Customization</Typography>
        </MenuItem>
        <SubMenu label="Charts" icon={<Equalizer />}>
          <Box
            backgroundColor={
              Mode === "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.light
            }
          >
            <MenuItem>Pie charts</MenuItem>
            <MenuItem>Line charts</MenuItem>
          </Box>
        </SubMenu>
        <SubMenu label="Setting" icon={<Settings />}>
          <Box
            backgroundColor={
              Mode === "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.light
            }
          >
            <MenuItem title="Collapse">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">Collapse</Typography>
                <Switch
                  id="collapse"
                  checked={collapsed}
                  onChange={() => setCollapsed(!collapsed)}
                  label="Collapse"
                />
              </Box>
            </MenuItem>
            <MenuItem title="Layout">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">RTL</Typography>
                <Switch
                  id="rtl"
                  checked={rtl}
                  onChange={handleRTLChange}
                  label="Change layout"
                />
              </Box>
            </MenuItem>
            <MenuItem title="Dark Mode">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">dark mode</Typography>
                <Switch
                  id="darkMode"
                  checked={Mode === "dark" ? true : false}
                  onChange={modeHandler}
                  label="Dark Mode"
                />
              </Box>
            </MenuItem>
            <MenuItem title="Image background">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">Image</Typography>
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

        <MenuItem icon={<DashboardOutlined />}>
          test
        </MenuItem>
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
