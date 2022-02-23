import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PostDetailsScreen, PostsListScreen } from '@screens'
import { colors } from '@utils/colors'
import React from 'react'
import { RootStackType, SCREENS } from './screens'

const Stack = createNativeStackNavigator<RootStackType>()

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.POSTS_LIST}
        screenOptions={{ headerTintColor: colors.primary }}>
        <Stack.Screen
          component={PostsListScreen}
          name={SCREENS.POSTS_LIST}
          options={{ title: 'Posts' }}
        />
        <Stack.Screen
          component={PostDetailsScreen}
          name={SCREENS.POST_DETAILS}
          options={{ title: 'Post' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root
