import { POSTS_FAILED, POSTS_REQUEST, POSTS_SUCCESS } from "../constants/postsConstants"
import axios from "axios";

const allPosts = () => async (dispatch) => {
    dispatch({ type: POSTS_REQUEST });
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch({ type: POSTS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: POSTS_FAILED, payload: error.message })
    }
}

export default allPosts;