import { PostsFilter } from '@contexts/posts/types'
import { axiosInstance } from './instance'

export const endpoints = {
  getPosts: (filter: PostsFilter) =>
    axiosInstance.get(`/r/pics/${filter}.json`),
}
