import { Post, PostsFilter } from './types'

export enum ACTION_TYPES {
  SET_POSTS = 'SET_POSTS',
  SET_FILTER = 'SET_FILTER',
}

export type ACTION_PAYLOADS = {
  [ACTION_TYPES.SET_POSTS]: Post[]
  [ACTION_TYPES.SET_FILTER]: PostsFilter
}
