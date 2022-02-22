import { RootStackType, SCREENS } from '@navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, ScrollView, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type PostsListProps = NativeStackScreenProps<RootStackType, SCREENS.POSTS_LIST>

const PostsList: React.FC<PostsListProps> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const goToPostDetails = () =>
    navigation.navigate(SCREENS.POST_DETAILS, { permalink: 'test' })

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Button title="Go to Post Details" onPress={goToPostDetails} />
    </ScrollView>
  )
}

export default PostsList
