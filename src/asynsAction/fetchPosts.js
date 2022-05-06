import axios from "axios";
import { pageCounter } from "../utils/pageCounter";

const fetchPosts = (limit) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({
        type: "TOTAL_PAGE",
        payload: pageCounter(response.data.length),
      });
      dispatch({
        type: "GET_POSTS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default fetchPosts;
