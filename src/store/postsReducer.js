const GET_POSTS = 'GET_POSTS'
const CHANGE_CURR_POSTID = 'CHANGE_CURR_POSTID'
const FILTER_POSTS = 'FILTER_POSTS'

const defaultState = {
    posts: [],
    currentPostId: 1
}

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: [action.payload] }

        case CHANGE_CURR_POSTID: {
            console.log(action.payload)
            return { ...state, currentPostId: action.payload }
        }
        case FILTER_POSTS: {
            console.log(action.payload)
            return { ...state, posts: [action.payload] }
        }
        default:
            return state
    }
}

export const getPostsAction = (payload) => ({ type: GET_POSTS, payload })
export const changeCurrPostIdAction = (payload) => ({ type: CHANGE_CURR_POSTID, payload })
export const filterPostsAction = (payload) => ({ type: FILTER_POSTS, payload })