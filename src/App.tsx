import { PostsProvider } from '@contexts/posts'
import { Root } from '@navigation'
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <PostsProvider>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Root />
      </PostsProvider>
    </SafeAreaProvider>
  )
}

export default App
