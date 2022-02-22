import { PostsProvider } from '@contexts/posts'
import { Root } from '@navigation'
import React from 'react'

const App: React.FC = () => {
  return (
    <PostsProvider>
      <Root />
    </PostsProvider>
  )
}

export default App
