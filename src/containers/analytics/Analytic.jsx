import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../../components/TabPanel";
import OverviewChart from "./OverviewChart";
import TopVideoList from "./TopVideoList";
import RealTimeChart from "./RealTimeChart";
import LatestVideoCard from "../../components/LatestVideoCard";

const Analytic = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Typography variant="h5" sx={styles.pageTitle}>
        Analytics
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Overview" id="tab-0" />
          <Tab label="Content" id="tab-1" />
          <Tab label="Audience" id="tab-2" />
          <Tab label="Revenue" id="tab-3" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={styles.overviewContainer}>
          <Box sx={styles.statsContainer}>
            <Typography variant="h5">
              Your channel got 23,084 views in the last 28 days
            </Typography>
            <OverviewChart />
            <Divider sx={styles.divider} />
            <TopVideoList />
          </Box>
          <Box>
            <RealTimeChart />
            <LatestVideoCard />
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TopVideoList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Audience</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Revenue</Typography>
      </TabPanel>
    </Box>
  );
};

export default Analytic;

/** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  overviewContainer: {
    display: "grid",
    gridTemplateColumns: { md: "1fr", lg: "1fr 300px" },
    gap: 2,
    justifyContent: "center",
  },
  statsContainer: {
    bgcolor: "neutral.light",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  divider: { my: 2 },
};
