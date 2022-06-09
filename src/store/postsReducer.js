const GET_POSTS = 'GET_POSTS'
const CHANGE_CURR_POST = 'CHANGE_CURR_POST'

const defaultState = {
    posts: [],
    currentPost: 1
}

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: [...state.posts, action.payload] }

        case CHANGE_CURR_POST: {
            return { ...state, currentPost: 2 }
        }
        default:
            return state
    }
}

export const getPostsAction = (payload) => ({ type: GET_POSTS, payload })
export const changeCurrPostAction = (payload) => ({ type: CHANGE_CURR_POST, payload })
