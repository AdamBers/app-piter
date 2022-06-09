import { getPostsAction } from "../postsReducer"

export const fetchPosts = () => {
    return function (dispatch) {
        fetch('https://dummyjson.com/posts?limit=150&skip=0')
            .then(response => response.json())
            .then(json => dispatch(getPostsAction(json)))
    }
}