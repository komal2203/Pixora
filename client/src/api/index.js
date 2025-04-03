import axios from "axios";

const url = "https://pixora-r2f8.onrender.com";

export const fetchPosts = async () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => 
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

// This function deletes all posts from the database
export const deleteAllPosts = () => axios.delete(`${url}/deleteAll`);
