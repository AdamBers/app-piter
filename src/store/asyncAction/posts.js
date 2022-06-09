import { getPostsAction } from "../postsReducer"
import { filterPostsAction } from "../postsReducer"

export const fetchPosts = () => {
    return function (dispatch) {
        fetch('https://dummyjson.com/posts?limit=150&skip=0')
            .then(response => response.json())
            .then(json => dispatch(getPostsAction(json)))
    }
}

export const filterPosts = (query) => {
    return function (dispatch) {
        fetch(`https://dummyjson.com/posts/search?q=${query}`)
            .then(response => response.json())
            .then(json => dispatch(filterPostsAction(json)))
    }
}