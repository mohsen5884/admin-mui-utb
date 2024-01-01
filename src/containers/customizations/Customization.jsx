import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../../components/TabPanel";
import ColorText from "../../components/ColorText";
import {
  MovieFilterRounded,
  SlowMotionVideoRounded,
} from "@mui/icons-material";

const Customization = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Typography variant="h5" sx={styles.pageTitle}>
        Customization
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Layout" id="tab-0" />
          <Tab label="Branding" id="tab-1" />
          <Tab label="Basic Info" id="tab-2" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h6">Video spotlight1</Typography>
        <Typography variant="h7">
          <ColorText color="neutral.normal">
            Add a video to the top of your chanel homepage
          </ColorText>
        </Typography>
        <Box sx={styles.rowContainer}>
          <SlowMotionVideoRounded sx={styles.rowIcon} />
          <Box sx={styles.secondColumn}>
            <Typography variant="h6">
              Channel trailer for people who haven't subscribed
            </Typography>
            <Typography variant="h7">
              <ColorText color="neutral.normal">
                Share a preview of your channel shown with people who haven't
                subscribed yet.
              </ColorText>
            </Typography>
          </Box>
          <Typography sx={styles.rowLink} variant="link">
            Add
          </Typography>
        </Box>
        <Box sx={styles.rowContainer}>
          <MovieFilterRounded sx={styles.rowIcon} />
          <Box sx={styles.secondColumn}>
            <Typography variant="h6">
              Fetured video for returning subscribers
            </Typography>
            <Typography variant="h7">
              <ColorText color="neutral.normal">
                Highlight a video for your subscribers to watch. this video
                won't be shown again at the top of your page for subscribers who
                have watch it.
              </ColorText>
            </Typography>
          </Box>
          <Typography sx={styles.rowLink} variant="link">
            Add
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Nothing yet </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Nothing yet </Typography>
      </TabPanel>
    </Box>
  );
};

export default Customization;

/** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  rowContainer: {
    width: "100%",
    maxWidth: 900,
    border: 1,
    borderColor: "neutral.medium",
    borderRadius: 1,
    mt: 2,
    p: 2,
    display: "flex",
    alignItems: "flex-start",
  },
  rowIcon: {
    fontSize: 40,
    color: "neural.normal",
  },
  secondColumn: {
    ml: 1,
  },
  rowLink: {
    ml: "auto",
  },
};
