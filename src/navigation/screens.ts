export enum SCREENS {
  POSTS_LIST = 'POSTS_LIST',
  POST_DETAILS = 'POST_DETAILS',
}

export type RootStackType = {
  [SCREENS.POSTS_LIST]: undefined
  [SCREENS.POST_DETAILS]: { permalink: string }
}
