import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Article } from './src/ui/Article'
import { Feed } from './src/ui/Feed'
import { ScreensParamsList } from './src/ui/NavigationTypes'

const Stack = createNativeStackNavigator<ScreensParamsList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Feed'} component={Feed} />
        <Stack.Screen name={'Article'} component={Article} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
