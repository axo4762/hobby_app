import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import rickroll from "../static/images/rickroll.jpg";
import logo from "../logo.svg";

const Bio = () => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        image={rickroll}
        alt="Rick Astley"
        sx={{ height: 194, width: 194 }}
      />

      <Box>
        <CardContent>
          <Typography variant="h5" mt={1} textAlign="left">
            Rick_Astley1987
          </Typography>
          <Typography variant="h6" mt={1} textAlign="left">
            Rick Astley
          </Typography>
          <Typography mt={3} textAlign="left">
            Hi, I'm a guy with alot of hobbies! This is my profile where I
            display my collections!
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Bio;
