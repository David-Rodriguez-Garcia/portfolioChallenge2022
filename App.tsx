import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './src/ui/_navigation/AppNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
