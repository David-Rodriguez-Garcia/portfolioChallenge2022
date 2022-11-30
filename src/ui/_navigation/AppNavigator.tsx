import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Detail } from '../Detail'
import { Feed } from '../Feed'
import { ScreensParamsList } from './NavigationTypes'

const Stack = createNativeStackNavigator<ScreensParamsList>()

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Feed'} component={Feed} />
      <Stack.Screen name={'Detail'} component={Detail} />
    </Stack.Navigator>
  )
}
