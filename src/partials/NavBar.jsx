import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              component={Link}
              to="/"
            >
              <HomeIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
              color={"white"}
            >
              <Link
                to="/countries"
                style={{ textDecoration: "none", color: "white" }}
              >
                Countries API
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};
