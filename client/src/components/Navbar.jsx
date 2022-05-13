import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(2),
    display: "flex",
    
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(3),
    "&:hover": {
      color: "white",
      fontSize: "20px",
     
    },
   
  },
  active:{
    borderBottom: "1px solid white",
  }
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        
        <Typography variant="h6" className={classes.logo}>
        
        <Link to="/" style={{  color: "white",textDecoration: "none"}}>Expense Tracker</Link>
          
        </Typography>
        
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Deposit
            </Link>
            <Link to="/withdraw" className={classes.link}>
              Withdraw
            </Link>
            <Link to="/report" className={classes.link}>
              Report
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
