import { RootStackType, SCREENS } from '@navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { REDDIT_BASE_URL } from '@utils/constants'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview'

type PostDetailsProps = NativeStackScreenProps<
  RootStackType,
  SCREENS.POST_DETAILS
>

const PostDetails: React.FC<PostDetailsProps> = ({ route }) => {
  const uri = `${REDDIT_BASE_URL}${route.params.permalink}`
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <WebView source={{ uri }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default PostDetails
