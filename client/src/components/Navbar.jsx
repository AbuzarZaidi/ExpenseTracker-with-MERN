import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              > 
                <MenuIcon />
              </IconButton>  */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Expenses Tracker
            </Link>
          </Typography>

          <Button color="inherit">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Deposit
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/withdraw"
              style={{ textDecoration: "none", color: "white" }}
            >
              Withdraw
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/report"
              style={{ textDecoration: "none", color: "white" }}
            >
              Report
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
