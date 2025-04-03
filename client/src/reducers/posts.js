import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  DELETE_ALL,
  LIKE,
} from "../constants/actionTypes";

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case LIKE:
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case FETCH_ALL:
      return action.payload;
    case DELETE_ALL:
      return []; // Clears all posts
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default postsReducer;
