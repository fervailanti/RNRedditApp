import { PostsFilter } from '@contexts/posts/types'

export const REDDIT_API_BASE_URL = 'https://api.reddit.com'
export const REDDIT_BASE_URL = 'https://www.reddit.com'

export const REDDIT_POST_FILTERS: {
  key: PostsFilter
  icon: string
}[] = [
  { key: 'new', icon: 'newspaper' },
  { key: 'hot', icon: 'fire' },
  { key: 'controversial', icon: 'chat-alert' },
  { key: 'top', icon: 'trophy-variant' },
]

export const REFRESH_OFFSET_VARIANTS = {
  android: 80,
  ios: 8,
  windows: 8,
  macos: 8,
  web: 8,
}
