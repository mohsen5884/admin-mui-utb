import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const LatestVideoCard = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <Card {...props}>
      <CardContent>
        <Typography variant="cardTitle">{t("latestVideoPerformance")}</Typography>
        <Box sx={styles.latestVideoContainer}>
          <Box
            sx={styles.latestVideoThumbnail}
            component={"img"}
            src={require("../assets/images/posts/1.jpg")}
          ></Box>
          <Typography sx={styles.latestVideoTitle}>
          {t("firstTimeHours",{time:6})}    
          </Typography>
        </Box>
        <Typography variant="h7" sx={styles.latestVideoTimeLabel}>
        {t("firstTimeHours",{time:6})} 
        </Typography>
        <Box sx={styles.latestVideoStateRow}>
          <Typography variant="h7">{t("views")} </Typography>
          <Typography variant="h7">225</Typography>
        </Box>
        <Box sx={styles.latestVideoStateRow}>
          <Typography variant="h7">{t("watchTime")}</Typography>
          <Typography variant="h7">30</Typography>
        </Box>
        <Box sx={styles.latestVideoStateRow}>
          <Typography variant="h7">{t("likes")}</Typography>
          <Typography variant="h7">23</Typography>
        </Box>
        <Typography sx={styles.cardAction} variant="link">
          GO TO VIDEO ANALYTICS
        </Typography>
        <Typography sx={styles.cardAction} variant="link">
        {t("seeComments")}(12)
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
