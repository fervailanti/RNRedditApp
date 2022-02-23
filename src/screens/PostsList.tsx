import { Card } from '@components'
import { PostsContext } from '@contexts/posts'
import { ACTION_TYPES } from '@contexts/posts/actions'
import { RootStackType, SCREENS } from '@navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { endpoints } from '@services/axios'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'

type PostsListProps = NativeStackScreenProps<RootStackType, SCREENS.POSTS_LIST>

const PostsList: React.FC<PostsListProps> = ({ navigation }) => {
  const { state, dispatch } = useContext(PostsContext)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    endpoints
      .getPosts(state.filter)
      .then(({ data }) => {
        dispatch({
          type: ACTION_TYPES.SET_POSTS,
          payload: data.data.children,
        })
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, [dispatch, state.filter])

  const goToPostDetails = (permalink: string) => {
    navigation.navigate(SCREENS.POST_DETAILS, { permalink })
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>{state.filter}</Text>
      {state.posts.map(({ data }, index) => {
        return (
          <Card
            bottomIndicators={[
              { text: data.author, label: '@' },
              { text: data.score, label: 'S' },
              { text: data.num_comments, label: 'C' },
            ]}
            imageUrl={data.thumbnail}
            key={index}
            title={data.title}
            topIndicators={[{ text: data.created, label: 'D' }]}
            onPress={() => goToPostDetails(data.permalink)}
          />
        )
      })}
    </ScrollView>
  )
}

export default PostsList
