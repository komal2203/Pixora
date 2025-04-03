import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

import useStyles from "./styles";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import pixora from "./images/Pixora.png";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
   <Navbar/>
      <Grow in>
        <Container>
          {/* <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid> */}
          <div
            style={{
              display: "flex",
              // flexDirection: "column-reverse",
              flexDirection: isMobile ? "column-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "1rem",
              margin: "1rem",
              width: "100%",
            }}
          >
            <div style={{ flex: 3 }}>
              <Posts setCurrentId={setCurrentId} />
            </div>

            <div style={{ flex: 1 }}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </div>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
