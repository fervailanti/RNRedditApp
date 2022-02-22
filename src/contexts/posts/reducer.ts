import { ACTION_TYPES } from './actions'
import { PostsActions, PostsState } from './types'

const postsReducer = (state: PostsState, action: PostsActions) => {
  switch (action.type) {
    case ACTION_TYPES.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    case ACTION_TYPES.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}

export default postsReducer
