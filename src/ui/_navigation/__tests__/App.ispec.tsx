import { NavigationContainer } from '@react-navigation/native'
import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react-native'
import { asFunction } from 'awilix'

import { container } from '../../../core/_di'
import { aSetOfArticles } from '../../../core/domain/model/Article/Article.model'
import AppNavigator from '../AppNavigator'

jest.useFakeTimers()

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

container.register({
  getArticles: asFunction(() => Promise.resolve(aSetOfArticles())),
})

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
