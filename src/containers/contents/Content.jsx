import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../../components/TabPanel";
import { DataGrid } from "@mui/x-data-grid";
import { AttachMoneyOutlined, VisibilityOutlined } from "@mui/icons-material";

const columns = [
  {
    field: "thumbnail",
    headerName: "Video",
    minWidth: 500,
    flex: 4,
    renderCell: (params) => (
      <Box sx={styles.videoColumn}>
        <Box
          component={"img"}
          sx={styles.videoThumbnail}
          src={params.row.thumbnail}
        />
        <Box sx={styles.videoDetails}>
          <Typography sx={styles.videoTitle}>
            Must Know JavaScript interview Questions | part 1
          </Typography>
          <Typography sx={styles.videoDescription}>
            In this video you will learn how to solve JavaScript interview
            questions.
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    field: "visibility",
    headerName: "Visibility",
    minWidth: 170,
    flex: 2,
    renderCell: (params) => (
      <Box sx={styles.iconColumn}>
        <VisibilityOutlined />
        <Typography sx={styles.iconColumnText}>
          {params.row.visibility}
        </Typography>
      </Box>
    ),
  },
  {
    field: "monetization",
    headerName: "Monetization",
    minWidth: 170,
    flex: 2,
    renderCell: (params) => (
      <Box sx={styles.iconColumn}>
        <AttachMoneyOutlined />
        <Typography sx={styles.iconColumnText}>
          {params.row.monetization}
        </Typography>
      </Box>
    ),
  },
  {
    field: "views",
    headerName: "Views",
    minWidth: 170,
    flex: 1,
  },
  {
    field: "comments",
    headerName: "Comments",
    minWidth: 170,
    flex: 1,
  },
];

const videos = [
  {
    id: 1,
    thumbnail: require("../../assets/images/products/pvc2.jpg"),
    visibility: "Public",
    monetization: "On",
    views: 100,
    comments: 12,
  },
  {
    id: 2,
    thumbnail: require("../../assets/images/products/pvctiger1.jpg"),
    visibility: "Public",
    monetization: "On",
    views: 80,
    comments: 25,
  },
];
const posts = [
  {
    id: 1,
    thumbnail: require("../../assets/images/products/pvc2.jpg"),
    visibility: "Public",
    monetization: "On",
    views: 54,
    comments: 2,
  },
  {
    id: 2,
    thumbnail: require("../../assets/images/products/pvctiger1.jpg"),
    visibility: "Public",
    monetization: "On",
    views: 85,
    comments: 40,
  },
  {
    id: 2,
    thumbnail: require("../../assets/images/products/Furniture2.png"),
    visibility: "Public",
    monetization: "On",
    views: 100,
    comments: 17,
  },
];
const playLists = [
  {
    id: 1,
    thumbnail: require("../../assets/images/products/pvc2.jpg"),
    visibility: "Public",
    monetization: "On",
    views: 58,
    comments: 32,
  },
];
const lives = [];

const Content = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Typography variant="h5" sx={styles.pageTitle}>
        Content
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Videos" id="tab-0" />
          <Tab label="Lives" id="tab-1" />
          <Tab label="Posts" id="tab-2" />
          <Tab label="Play Lists" id="tab-3" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DataGrid
          rows={videos}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[25]}
          checkboxSelection
          autoHeight
          rowHeight={70}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DataGrid
          rows={lives}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[25]}
          checkboxSelection
          autoHeight
          rowHeight={70}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DataGrid
          rows={posts}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[25]}
          checkboxSelection
          autoHeight
          rowHeight={70}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DataGrid
          rows={playLists}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[25]}
          checkboxSelection
          autoHeight
          rowHeight={70}
        />
      </TabPanel>
    </Box>
  );
};

export default Content;

/** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  videoColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  videoThumbnail: {
    width: 120,
  },
  videoDetails: {
    ml: 2,
  },
  videoTitle: {
    fontSize: "0.8rem",
    widows: 490,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  videoDescription: {
    fontSize: "0.7rem",
    color: "neutral.normal",
    widows: 490,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  iconColumn: {
    display: "flex",
    alignItems: "center",
  },
  iconColumnText: {
    ml: 1,
    fontSize: "0.9rem",
  },
};
