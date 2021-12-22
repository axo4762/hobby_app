import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="secondary"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          color="secondary"
          sx={{ flexGrow: 1, textAlign: "left" }}
        >
          Profile
        </Typography>
        <Button color="secondary" sx={{ justifyContent: "flex-end" }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
