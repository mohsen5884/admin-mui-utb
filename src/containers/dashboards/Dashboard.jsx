import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import LatestVideoCard from "../../components/LatestVideoCard";
import ColorText from "../../components/ColorText";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
      {t("dashboard")}
      </Typography>
      <Box sx={styles.columnsContainer}>
        <LatestVideoCard sx={styles.item} />
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">{t("latestPost")}</Typography>
            <Box sx={styles.postAuthorSection}>
              <Avatar
                sx={styles.authorAvatar}
                src={require("../../assets/images/accounts/myimage.JPG")}
              />
              <Typography sx={styles.postMeta}>React With Mohsen</Typography>
              <Typography sx={styles.postMeta}>Jan 18, 2023</Typography>
            </Box>
            <Typography variant="body2" sx={styles.postBody}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Typography>
            <Divider sx={styles.divider} />
            <Box sx={styles.postState}>
              <Typography variant="body2">{t("likes")}</Typography>
              <Typography variant="body2">{t("comments")}</Typography>
              <Typography variant="h6">12</Typography>
              <Typography variant="h6">6</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              GO to community tab
            </Typography>
          </CardContent>
        </Card>
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Channel analytics</Typography>
            <Typography variant="h7">current subscribers</Typography>
            <Typography variant="h4">4,144</Typography>
            <Typography variant="cardTitle">
              <ColorText color={"green.main"}>+77</ColorText>
              <ColorText color={"neutral.normal"}>in last 28 days</ColorText>
            </Typography>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Summery</Typography>
            <Typography variant="h8">
              <ColorText color={"neutral.normal"}>last 28 days</ColorText>
            </Typography>
            <Box sx={styles.videoStateRow}>
              <Typography variant="h7">{t("views")}</Typography>
              <Typography variant="h7">225</Typography>
            </Box>
            <Box sx={styles.videoStateRow}>
              <Typography variant="h7">{t("viewsTime")}</Typography>
              <Typography variant="h7">30</Typography>
            </Box>
            <Box sx={styles.videoStateRow}>
              <Typography variant="h7">Estimated Revenue</Typography>
              <Typography variant="h7">450$</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Top Videos</Typography>
            <Typography variant="h8">
              <ColorText color="neutral.normal">
                Last 48 hours . {t("views")}
              </ColorText>
            </Typography>
            <Box sx={styles.videoStateRow}>
              <Typography variant="h7">
                How to become a software developer in 2023
              </Typography>
              <Typography variant="h7">450</Typography>
            </Box>
            <Box sx={styles.videoStateRow}>
              <Typography variant="h7">
                CSS Grid tutorial: How to use Grids to make awesome user
                interfaces.
              </Typography>
              <Typography variant="h7">287</Typography>
            </Box>
            <Box sx={styles.videoStateRow}>
              <Typography variant="h7">
                Call APIS in react native: practical guid
              </Typography>
              <Typography variant="h7">130</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              GO TO VIDEO ANALYTICS
            </Typography>
          </CardContent>
        </Card>
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="CardTitle">Latest Comments</Typography>
            <Typography variant="h7">
              <ColorText color="neutral.normal">
                Channel comments I haven't responded to
              </ColorText>
            </Typography>
            <Box sx={styles.commentsRow}>
              <Avatar
                sx={styles.avatar}
                src={require("../../assets/images/accounts/myimage.JPG")}
              />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React With Mohsen
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src={require("../../assets/images/products/pvctiger1.jpg")}
              />
            </Box>
            <Divider sx={styles.divider} />

            <Box sx={styles.commentsRow}>
              <Avatar
                sx={styles.avatar}
                src={require("../../assets/images/accounts/myimage.JPG")}
              />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React With Mohsen
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  How can I deploy this?
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src={require("../../assets/images/products/Furniture2.png")}
              />
            </Box>
            <Divider sx={styles.divider} />

            <Box sx={styles.commentsRow}>
              <Avatar
                sx={styles.avatar}
                src={require("../../assets/images/accounts/myimage.JPG")}
              />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React With Mohsen
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  Thank you, was very helpful.
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src={require("../../assets/images/products/pvc2.jpg")}
              />
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              View More
            </Typography>
          </CardContent>
        </Card>
        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Ideas for you</Typography>
              <Typography sx={styles.ideasQuestion}>
                Read to get business savvy?
              </Typography>
              <Typography variant="h7">
                Get trips from a successful creator on how to take a youTube
                channel and turn it to a business that earns you money
              </Typography>
              <Typography variant="link" sx={styles.cardAction}>
                GET STARTED NOW
              </Typography>
            </Box>
            <Box
              component={"img"}
              sx={styles.ideaImage}
              src={require("../../assets/images/products/pvctiger1.jpg")}
            />
          </CardContent>
        </Card>
        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Creator Insider</Typography>
              <Box
                component={"img"}
                sx={styles.insiderImage}
                src={require("../../assets/images/products/pvc2.jpg")}
              />
              <Typography sx={styles.ideasQuestion}>
                Ready to boost your skills use AI tools?
              </Typography>
              <Typography variant="h7">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
              <Typography sx={styles.cardAction} variant="link">
                WATCH ON YOUTUBE
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;

/** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  columnsContainer: {
    columns: "280px 3",
  },
  item: {
    mb: 2,
  },
  postAuthorSection: {
    display: "flex",
    alignItems: "center",
    my: 3,
  },
  authorAvatar: {
    width: "60px",
    height: "auto",
    mr: 1,
  },
  postMeta: {
    mr: 1,
    fontSize: "0.8rem",
    color: "neutral.normal",
  },
  divider: {
    my: 2,
  },
  postState: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    my: 3,
  },
  cardAction: {
    mt: 2,
  },
  videoStateRow: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
    "&:hover": {
      color: "primary.main",
      cursor: "pointer",
    },
  },
  commentsRow: {
    display: "flex",
    alignItems: "flex-start",
    mt: 2,
  },
  commentDetailsSection: {
    display: "flex",
    alignItems: "center",
  },
  commentText: {
    fontSize: "0.8rem",
    mt: 0.5,
    mr: 2,
  },
  videoThumbnail: {
    width: 80,
    ml: "auto",
  },
  ideaContent: {
    display: "flex",
    flexDirection: "row",
  },
  ideasQuestion: {
    fontSize: "0.9rem",
    fontWeight: 500,
    my: 2,
  },
  ideaImage: {
    width: 80,
    alignSelf: "center",
    ml: 5,
  },
  insiderImage: {
    width: "100%",
    mt: 1,
  },
};
