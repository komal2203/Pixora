
import React from "react";
import Post from "./Post/Post";

import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

import useSyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  const classes = useSyles();

  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      clasname={classes.container}
      container
      alignItems="stretch"
      spacing={1}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          // gap: "0.2rem",
          // padding: "0.2rem",
        }}
      >
        {/* {posts.map((post) => (
        //   <Grid key={post._id} item xs={12} sm={6} md={4} lg={4}>
        //     <Post post={post} />
        //   </Grid> */}

        {posts.map((post) => (
          <div
            key={post._id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
        {/* ))} */}
      </div>
    </Grid>
    // <Grid container spacing={2} alignItems="stretch">
    //   {posts.map((post) => (
    //     <Grid key={post._id} item xs={12} sm={6} md={4}>
    //       <Post post={post} setCurrentId={setCurrentId} />
    //     </Grid>
    //   ))}
    // </Grid>
  );
};
export default Posts;
