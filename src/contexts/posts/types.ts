import { Action } from '../types'
import { ACTION_PAYLOADS } from './actions'

export type Post = {
  permalink: string
  title: string
  thumbnail: string
  author: string
  score: number
  num_comments: number
}

export type PostsFilter = 'new' | 'hot' | 'controversial' | 'top'

export type PostsState = {
  posts?: Post[]
  filter?: PostsFilter
}

export type PostsActions = Action<ACTION_PAYLOADS>
