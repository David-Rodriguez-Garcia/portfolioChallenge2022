import { fireEvent, render } from '@testing-library/react-native'
import { asFunction } from 'awilix'

import { container } from '../../../core/_di'
import { Article } from '../../../core/domain/model/Feed/Feed'
import { anArticle, aSetOfArticles } from '../../../core/domain/model/Feed/Feed.model'
import { getArbitraryDate } from '../../../core/domain/utils'
import { FeedProps, NavigationProp, RouteProp } from '../../_navigation/NavigationTypes'
import { Feed } from '../Feed'
import { FeedController } from '../Feed.controller'

describe('Feed', () => {
  it('displays the articles title', () => {
    const title1 = 'Title 1 text'
    const title2 = 'Title 2 text'
    const articles = [anArticle({ title: title1 }), anArticle({ title: title2 })]

    const { getByText } = renderView({ articles })

    expect(getByText(title1)).toBeDefined()
    expect(getByText(title2)).toBeDefined()
  })

  it('displays the articles description', () => {
    const description1 = 'Description of text with some content'
    const description2 = 'To be displayed in the current screen'
    const articles = [
      anArticle({ description: description1 }),
      anArticle({ description: description2 }),
    ]

    const { getByText } = renderView({ articles })

    expect(getByText(description1)).toBeDefined()
    expect(getByText(description2)).toBeDefined()
  })

  it('displays the articles date', () => {
    const date1 = getArbitraryDate()
    const date2 = getArbitraryDate()

    const articles = [anArticle({ date: date1 }), anArticle({ date: date2 })]

    const { getByText } = renderView({ articles })

    expect(getByText(date1.toLocaleDateString())).toBeDefined()
    expect(getByText(date2.toLocaleDateString())).toBeDefined()
  })

  it('displays the mini article image', () => {
    const { getAllByTestId } = renderView()

    expect(getAllByTestId('smallArticleImage')).toBeDefined()
  })

  it('handles press', () => {
    const onArticlePress = jest.fn()
    const title = 'title1'
    const articles = [anArticle({ title })]

    const { getByText } = renderView({ articles, onArticlePress })

    const button = getByText(title)

    fireEvent.press(button)

    expect(onArticlePress).toHaveBeenCalled()
  })

  describe('onArticlePress', () => {
    it('calls with the title param', () => {
      const onArticlePress = jest.fn()
      const title = 'title1'
      const articles = [anArticle({ title })]

      const { getByText } = renderView({ articles, onArticlePress })

      const button = getByText(title)

      fireEvent.press(button)

      expect(onArticlePress).toHaveBeenCalledWith({ title })
    })
  })
})

describe('FeedController', () => {
  it('calls the navigation prop with the title param', () => {
    const navigation = { navigate: jest.fn() }
    const route = jest.fn()
    const title = 'Title text'
    const articles = [anArticle({ title })]
    container.register({ getArticles: asFunction(() => articles) })
    const { getByText } = renderController({ navigation, route })

    const button = getByText(title)
    fireEvent.press(button)

    expect(navigation.navigate).toHaveBeenCalledWith('Detail', { title })
  })
})

const renderView = (props?: { articles?: Article[]; onArticlePress?: () => void }) => {
  const articles = props?.articles ?? aSetOfArticles()
  const onArticlePress = props?.onArticlePress ?? (() => null)

  return render(<Feed articles={articles} onArticlePress={onArticlePress} />)
}

const renderController = (props?: Record<keyof FeedProps, any>) => {
  const navigation = (props?.navigation ?? jest.fn()) as unknown as NavigationProp<'Feed'>
  const route = (props?.route ?? jest.fn()) as unknown as RouteProp<'Feed'>

  return render(<FeedController navigation={navigation} route={route} />)
}
