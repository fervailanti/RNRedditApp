import { RootStackType, SCREENS } from '@navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { ScrollView, Text, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type PostDetailsProps = NativeStackScreenProps<
  RootStackType,
  SCREENS.POST_DETAILS
>

const PostDetails: React.FC<PostDetailsProps> = ({ route }) => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Text>{route.params.permalink}</Text>
    </ScrollView>
  )
}

export default PostDetails
