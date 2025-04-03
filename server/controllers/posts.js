// Description: This file contains the controller for the posts route.

import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    // console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteAllPosts = async (req, res) => {
  try {
    await PostMessage.deleteMany({});
    res.json({ message: "All posts deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting posts", error });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${_id}`);

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );

  res.json(updatedPost);
};

// export const deletePost = async (req, res) => {
//   const { id:_id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(_id))
//     return res.status(404).send(`No post with id: ${id}`);

//   await PostMessage.findByIdAndRemove(id);

//   res.json({ message: "Post deleted successfully." });
// };

export const deletePost = async (req, res) => {
  const { id: _id } = req.params; // Destructure id as _id

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${_id}`); // Use _id here

  await PostMessage.findByIdAndDelete(_id); // Use _id instead of id

  res.json({ message: "Post deleted successfully." });
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with id: ${_id}");

  const post = await PostMessage.findById(_id);

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatedPost);
};
