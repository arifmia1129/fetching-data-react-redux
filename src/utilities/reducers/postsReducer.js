import { POSTS_FAILED, POSTS_REQUEST, POSTS_SUCCESS } from "../constants/postsConstants";

const initialPostsState = {
    isLoading: false,
    posts: [],
    error: null
}

const postsReducer = (state = initialPostsState, action) => {
    switch (action.type) {
        case POSTS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: action.payload
            }
        case POSTS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default postsReducer;