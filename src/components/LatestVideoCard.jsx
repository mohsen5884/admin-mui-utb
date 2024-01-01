import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const LatestVideoCard = (props) => {
  return (
    <Card {...props}>
      <CardContent>
        <Typography variant="cardTitle">Latest Video Performance</Typography>
        <Box sx={styles.latestVideoContainer}>
          <Box
            sx={styles.latestVideoThumbnail}
            component={"img"}
            src={require("../assets/images/products/Furniture2.png")}
          ></Box>
          <Typography sx={styles.latestVideoTitle}>
            ReactJs Search bar in 5 min
          </Typography>
        </Box>
        <Typography variant="h7" sx={styles.latestVideoTimeLabel}>
          First 6 hours:
        </Typography>
        <Box sx={styles.latestVideoStateRow}>
          <Typography variant="h7">Views</Typography>
          <Typography variant="h7">225</Typography>
        </Box>
        <Box sx={styles.latestVideoStateRow}>
          <Typography variant="h7">Watch time</Typography>
          <Typography variant="h7">30</Typography>
        </Box>
        <Box sx={styles.latestVideoStateRow}>
          <Typography variant="h7">Likes</Typography>
          <Typography variant="h7">23</Typography>
        </Box>
        <Typography sx={styles.cardAction} variant="link">
          GO TO VIDEO ANALYTICS
        </Typography>
        <Typography sx={styles.cardAction} variant="link">
          SEE COMMENTS(12)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LatestVideoCard;

/** @type {import("@mui/material").SxProps} */
const styles = {
  latestVideoContainer: {
    width: "100%",
    position: "relative",
    mb: 1,
  },
  latestVideoThumbnail: {
    width: "100%",
    mt: 1,
    filter: "brightness(20%)",
    display: "block",
  },
  latestVideoTitle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    color: "neutral.light",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
    mb: 2,
  },
  latestVideoTimeLabel: {
    color: "neutral.normal",
    mt: 1,
  },
  latestVideoStateRow: {
    display: "flex",
    justifyContent: "space-between",
    mt: 1,
  },
  cardAction: {
    mt: 1,
  },
};
