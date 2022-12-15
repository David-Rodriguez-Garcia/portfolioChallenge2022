import { NavigationContainer } from '@react-navigation/native'
import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react-native'

import AppNavigator from '../AppNavigator'

jest.useFakeTimers()

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('App', () => {
  it('navigates to the Detail screen on artile press', () => {
    const { getByTestId, getAllByText } = renderApp()

    const titles = getAllByText('Fake article title')

    fireEvent.press(titles[1])

    waitForElementToBeRemoved(() => getAllByText('Fake article title')[1])

    expect(getByTestId('detailScreen')).toBeDefined()
  })
})

const renderApp = () => {
  return render(
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
