import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const rows = [
  {
    id: 1,
    thumbnail: require("../../assets/images/products/Furniture2.png"),
    name: "How to become a software developer",
    averageViewDuration: "2:25 (41:0%)",
    views: 3211,
  },
  {
    id: 2,
    thumbnail: require("../../assets/images/products/pvc2.jpg"),
    name: "ract native crash course in 4 hours",
    averageViewDuration: "9:40 (30:5%)",
    views: 3102,
  },
  {
    id: 3,
    thumbnail: require("../../assets/images/products/Furniture2.png"),
    name: "React Js SearchBar in 5 minutes",
    averageViewDuration: "3:10 (25:5%)",
    views: 1900,
  },
  {
    id: 4,
    thumbnail: require("../../assets/images/products/pvctiger1.jpg"),
    name: "JavaScript crash course including real world projects",
    averageViewDuration: "8:10 (15:5%)",
    views: 1201,
  },
  {
    id: 5,
    thumbnail: require("../../assets/images/products/Furniture2.png"),
    name: "How to build an admin panel using react and TypeScript",
    averageViewDuration: "2:10 (34:1%)",
    views: 1195,
  },
  {
    id: 6,
    thumbnail: require("../../assets/images/products/pvc2.jpg"),
    name: "TypeScript crash Course for beginners",
    averageViewDuration: "5:25 (14:1%)",
    views: 1037,
  },
];

const TopVideoList = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6">Your top content in this period</Typography>
      <TableContainer sx={styles.tableContainer} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Content</TableCell>
              <TableCell align="right">Average view duration</TableCell>
              <TableCell align="right">Views</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component={"th"} sx={styles.containerCell}>
                  <Box
                    sx={styles.videoThumbnail}
                    component={"img"}
                    src={row.thumbnail}
                  />
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.averageViewDuration}</TableCell>
                <TableCell align="right">{row.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopVideoList;

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    mt: 4,
    width: "100%",
    textAlign: "center",
  },
  tableContainer: {
    mt: 8,
  },
  containerCell: {
    display: "flex",
    alignItems: "center",
  },
  videoThumbnail: {
    width: "100%",
    maxWidth: 100,
    mr: 1,
  },
};
