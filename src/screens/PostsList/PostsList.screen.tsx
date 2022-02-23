import { Card } from '@components'
import { PostsContext } from '@contexts/posts'
import { ACTION_TYPES } from '@contexts/posts/actions'
import { Post } from '@contexts/posts/types'
import { RootStackType, SCREENS } from '@navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { endpoints } from '@services/axios'
import { colors } from '@utils/colors'
import { formatAge } from '@utils/helpers'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FlatList, ListRenderItem, RefreshControl } from 'react-native'
import PostsFilters from './PostsFilters'
import { styles } from './styles'

type PostsListProps = NativeStackScreenProps<RootStackType, SCREENS.POSTS_LIST>

const PostsList: React.FC<PostsListProps> = ({ navigation }) => {
  const { state, dispatch } = useContext(PostsContext)
  const [loading, setLoading] = useState<boolean>(false)

  const setPosts = useCallback(
    (payload: Post[]) => {
      dispatch({ type: ACTION_TYPES.SET_POSTS, payload })
    },
    [dispatch],
  )

  const updatePosts = useCallback(() => {
    setLoading(true)
    endpoints
      .getPosts(state.filter)
      .then(({ data }) => setPosts(data.data.children))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [setPosts, state.filter])

  useEffect(() => {
    updatePosts()
  }, [updatePosts])

  const goToPostDetails = (permalink: string) => {
    navigation.navigate(SCREENS.POST_DETAILS, { permalink })
  }

  const renderPost: ListRenderItem<Post> = ({ item }) => (
    <Card
      bottomIndicators={[
        { text: item.data.author, icon: 'account', flex: true },
        { text: item.data.score, icon: 'arrow-up-bold-outline' },
        { text: item.data.num_comments, icon: 'comment-outline' },
      ]}
      imageUrl={item.data.thumbnail}
      title={item.data.title}
      topIndicators={[
        {
          text: formatAge(item.data.created),
          icon: 'clock-time-three-outline',
          flex: true,
        },
      ]}
      onPress={() => goToPostDetails(item.data.permalink)}
    />
  )

  return (
    <FlatList
      ListHeaderComponent={PostsFilters}
      contentContainerStyle={styles.container}
      data={state.posts}
      keyExtractor={item => item.data.id}
      refreshControl={
        <RefreshControl
          colors={[colors.primary]}
          progressViewOffset={8}
          refreshing={loading}
          tintColor={colors.primary}
          titleColor={colors.primary}
          onRefresh={updatePosts}
        />
      }
      renderItem={renderPost}
    />
  )
}

export default PostsList
