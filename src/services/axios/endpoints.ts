import { PostsFilter } from '@contexts/posts/types'
import { SUBREDDIT } from '@utils/constants'
import { axiosInstance } from './instance'

export const endpoints = {
  getPosts: (filter: PostsFilter) =>
    axiosInstance.get(`/${SUBREDDIT}/${filter}.json`),
}
