import React, { createContext, Dispatch, useReducer } from 'react'
import postsReducer from './reducer'
import { PostsActions, PostsState } from './types'

const initialState = {
  posts: [],
  filter: 'new' as const,
}

export const PostsContext = createContext<{
  state: PostsState
  dispatch: Dispatch<PostsActions>
}>({
  state: initialState,
  dispatch: () => null,
})

export const PostsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialState)
  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {children}
    </PostsContext.Provider>
  )
}
