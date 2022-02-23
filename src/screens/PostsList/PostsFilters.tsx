import { Button, Icon } from '@components'
import { PostsContext } from '@contexts/posts'
import { ACTION_TYPES } from '@contexts/posts/actions'
import { PostsFilter } from '@contexts/posts/types'
import { colors } from '@utils/colors'
import { REDDIT_POST_FILTERS, SUBREDDIT } from '@utils/constants'
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

const PostsFilters: React.FC = () => {
  const { state, dispatch } = useContext(PostsContext)

  const handleChange = (key: PostsFilter) => {
    dispatch({ type: ACTION_TYPES.SET_FILTER, payload: key })
  }

  return (
    <View>
      <View style={styles.titleContainer}>
        <Icon color={colors.primary} name="reddit" size={32} />
        <Text numberOfLines={1} style={styles.title}>
          {SUBREDDIT}
        </Text>
      </View>
      <View style={styles.header}>
        {REDDIT_POST_FILTERS.map(({ key, icon }) => {
          const isActive = state.filter === key
          return (
            <Button
              color={isActive ? colors.primary : colors.gray.light}
              icon={icon}
              key={key}
              onPress={() => handleChange(key)}>
              {key}
            </Button>
          )
        })}
      </View>
    </View>
  )
}

export default PostsFilters
