import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useStyles from "./styles";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  //    console.log("Image Data:", post.selectedFile);
  return (
    // <Card className={classes.card}>
    //   <CardMedia
    //     className={classes.media}
    //     image={post.selectedFile}
    //     title={post.title}
    //     style={{ height: "200px", width: "100%", objectFit: "cover" }}
    //   />

    //   <div className={classes.overlay}>
    //     <Typography variant="h6">{post.creator}</Typography>
    //     <Typography variant="body2">
    //       {moment(post.createdAt).fromNow()}
    //     </Typography>
    //   </div>

    //   <div className={classes.overlay2}>
    //     <Button style={{ color: "black" }} size="small" onClick={() => {}}>
    //       <MoreHorizIcon fontSize="default" />
    //     </Button>
    //   </div>

    //   <div className={classes.details}>
    //     <Typography variant="body2" color="textSecondary">
    //       {post.tags.map((tag) => `#${tag} `)}
    //     </Typography>
    //   </div>

    //   <CardContent>
    //     <Typography variant="h5" gutterBottom>
    //       {post.message}
    //     </Typography>
    //   </CardContent>

    //   <CardActions className={classes.cardActions}>
    //     <Button size="small" color="primary" onClick={() => {}}>
    //       <ThumbUpAltIcon fontSize="small" />
    //       Like {post.likeCount}
    //     </Button>

    //     <Button size="small" color="primary" onClick={() => {}}>
    //       <DeleteIcon fontSize="small" />
    //       Delete
    //     </Button>
    //   </CardActions>
    //   <CardMedia
    //     className={classes.media}
    //     image={post.selectedFile}
    //     title={post.title}
    //   />
    // </Card>
    <Card
      className={classes.card}
      style={{
        margin: "1rem",
        border: "1px solid #ddd",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        overflow: "hidden",
        position: "relative", // Make the Card the relative container
      }}
    >
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
          borderBottom: "1px solid #ddd",
        }}
      />
      <div
        className={classes.overlay}
        style={{
          position: "absolute", // Position the overlay on top of the CardMedia
          top: "0", // Align to the top of the CardMedia
          left: "0", // Align to the left of the CardMedia
          width: "100%", // Cover the full width of the CardMedia
            height: "200px", // Cover the full height of the CardMedia
          backgroundColor: "rgba(116, 111, 111, 0.33)",
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        <div
          //   className={classes.overlay}
          style={{
            position: "relative",
            // top: "10px",
            // left: "10px",
            // backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          <Typography variant="h6" style={{ color: "white" }}>
            {post.creator}
          </Typography>
          <Typography variant="body2" style={{ color: "white" }}>
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>

        <div
          //   className={classes.overlay2}
          style={{
            position: "relative",
            // top: "10px",
            // right: "10px",
            // backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "5px",
            borderRadius: "50%",
          }}
        >
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
            }}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      </div>
      <div
        className={classes.details}
        style={{
          padding: "10px 16px",
          borderBottom: "1px solid #ddd",
          color: "#555",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>{" "}
      <CardContent style={{ padding: "16px" }}>
        <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
          {post.title}
        </Typography>
        <div
          // variant="body2"
          // gutterBottom
          style={{
            font: "arial",
            color: "rgba(78, 76, 76, 0.7)",
            marginTop: "10px",
          }}
          //   style={{ fontWeight: "bold" }}
        >
          {post.message}
        </div>
      </CardContent>
      <CardActions
        className={classes.cardActions}
        style={{
          padding: "0 16px 16px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          size="small"
          color="primary"
          style={{ marginRight: "1rem" }}
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Like &nbsp; {post.likeCount}
        </Button>

        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          &nbsp;Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
