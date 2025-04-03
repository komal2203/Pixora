import React, { useState, useEffect } from "react";

import { TextField, Button, Typography, Paper } from "@mui/material";

// import FileBase from "react-file-base64";
// import { useDropzone } from "react-dropzone";

import { useDispatch } from "react-redux";

import FileUpload from "../FileUpload.js";
import { createPost, updatePost } from "../../actions/posts.js";

import { useSelector } from "react-redux";

import useStyles from "./styles";
import { margin } from "@mui/system";

const Form = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form} `}
        onSubmit={handleSubmit}
        style={{ padding: "1rem" }}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Post
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          style={{ padding: "0.1rem", margin: "0.rem" }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          style={{ padding: "0.1rem", margin: "0.1rem" }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          style={{ padding: "0.1rem", margin: "0.1rem" }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
          style={{ padding: "0.1rem", margin: "0.1rem" }}
        />

        {/* <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div> */}
        {/* <FileUpload /> */}
        <FileUpload
          //   type="file"
          onDone={(base64) =>
            setPostData((prev) => ({ ...prev, selectedFile: base64 }))
          }
          style={{ margin: "0.1rem" }}
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          style={{ margin: "0.1rem" }}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
          style={{ margin: "0.1rem" }}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
