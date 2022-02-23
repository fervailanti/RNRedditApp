import { Button } from '@components'
import { PostsContext } from '@contexts/posts'
import { ACTION_TYPES } from '@contexts/posts/actions'
import { PostsFilter } from '@contexts/posts/types'
import { REDDIT_POST_FILTERS } from '@utils/constants'
import React, { useContext } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const PostsFilters: React.FC = () => {
  const { state, dispatch } = useContext(PostsContext)

  const handleChange = (key: PostsFilter) => {
    dispatch({ type: ACTION_TYPES.SET_FILTER, payload: key })
  }

  return (
    <View style={styles.header}>
      {REDDIT_POST_FILTERS.map(({ key, icon }) => {
        const isActive = state.filter === key
        return (
          <Button
            color={isActive ? '#FF4400' : '#666'}
            icon={icon}
            key={key}
            onPress={() => handleChange(key)}>
            {key}
          </Button>
        )
      })}
    </View>
  )
}

export default PostsFilters
