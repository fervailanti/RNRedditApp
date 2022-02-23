import { PostsFilter } from '@contexts/posts/types'

export const REDDIT_API_BASE_URL = 'https://api.reddit.com'
export const REDDIT_BASE_URL = 'https://www.reddit.com'
export const SUBREDDIT = 'r/pics'

export const REDDIT_POST_FILTERS: {
  key: PostsFilter
  icon: string
}[] = [
  { key: 'new', icon: 'newspaper' },
  { key: 'hot', icon: 'fire' },
  { key: 'controversial', icon: 'chat-alert' },
  { key: 'top', icon: 'trophy-variant' },
]
