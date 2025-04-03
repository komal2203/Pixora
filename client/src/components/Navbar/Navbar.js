import React from "react";
import { AppBar,Typography } from "@mui/material";
import useStyles from "./styles";
import pixora from "../../images/Pixora.png";

const Navbar = () => {

    const classes = useStyles();
 return ( <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography
      className={classes.heading}
      variant="h2"
      align="center"
      sx={{
        color: "rgb(0, 123, 255)",
        fontStyle: "italic",
        fontFamily: "cursive",
      }}
    >
      Pixora
      <img
        className={classes.image}
        src={pixora}
        alt="pixora"
        height="60"
        style={{ marginLeft: "0.5rem" }}
      />
    </Typography>
  </AppBar>)
};

export default Navbar;
