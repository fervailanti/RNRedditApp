import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PostDetails, PostsList } from '@screens'
import React from 'react'
import { RootStackType, SCREENS } from './screens'

const Stack = createNativeStackNavigator<RootStackType>()

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.POSTS_LIST}>
        <Stack.Screen
          component={PostsList}
          name={SCREENS.POSTS_LIST}
          options={{ title: 'Posts' }}
        />
        <Stack.Screen
          component={PostDetails}
          name={SCREENS.POST_DETAILS}
          options={{ title: 'Post' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root
