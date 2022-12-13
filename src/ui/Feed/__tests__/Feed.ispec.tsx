import { fireEvent, render } from '@testing-library/react-native'
import { asFunction } from 'awilix'

import { container } from '../../../core/_di'
import { Article } from '../../../core/domain/model/Article/Article'
import { anArticle, aSetOfArticles } from '../../../core/domain/model/Article/Article.model'
import { getArbitraryDate } from '../../../core/domain/utils'
import { NavigationProp, RouteProp } from '../../_navigation/NavigationTypes'
import { Feed } from '../Feed'
import { FeedController } from '../Feed.controller'

describe('Feed', () => {
  it('displays the articles title', () => {
    const title1 = 'Title 1 text'
    const title2 = 'Title 2 text'
    const articles = [anArticle({ title: title1 }), anArticle({ title: title2 })]

    const { getByText } = renderView(articles)

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

    const { getByText } = renderView(articles)

    expect(getByText(description1)).toBeDefined()
    expect(getByText(description2)).toBeDefined()
  })

  it('displays the articles date', () => {
    const date1 = getArbitraryDate()
    const date2 = getArbitraryDate()

    const articles = [anArticle({ date: date1 }), anArticle({ date: date2 })]

    const { getByText } = renderView(articles)

    expect(getByText(date1.toLocaleDateString())).toBeDefined()
    expect(getByText(date2.toLocaleDateString())).toBeDefined()
  })

  it('displays the mini article image', () => {
    const { getAllByTestId } = renderView()

    expect(getAllByTestId('smallArticleImage')).toBeDefined()
  })

  it('handles press', () => {
    const title = 'title1'
    const articles = [anArticle({ title })]

    const { getByText, onArticlePress } = renderView(articles)

    const button = getByText(title)

    fireEvent.press(button)

    expect(onArticlePress).toHaveBeenCalled()
  })

  describe('onArticlePress', () => {
    it('is called with the title, description, image and URL params', () => {
      const title = 'title1'
      const description =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur minima omnis dignissimos rem, eaque, delectus, repudiandae debitis quas quae ratione recusandae amet iure voluptatibus natus eveniet tenetur a aperiam.'
      const image = 'path/to/image'
      const url = 'https://google.com/'
      const articles = [anArticle({ title, description, image, url })]

      const { getByText, onArticlePress } = renderView(articles)

      const button = getByText(title)

      fireEvent.press(button)

      expect(onArticlePress).toHaveBeenCalledWith({ title, description, image, url })
    })
  })
})

describe('FeedController', () => {
  it('calls the navigation prop with the title, description, image and url params', () => {
    const title = 'Title text'
    const description =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam optio commodi reiciendis tenetur. Nihil voluptates, inventore nulla minus eius quis maxime aspernatur distinctio non atque laudantium. Veniam, eaque laboriosam.'
    const image = 'path/to/image'
    const url = 'https://google.com/'
    const articles = [anArticle({ title, description, image, url })]
    container.register({ getArticles: asFunction(() => articles) })
    const { getByText, navigation } = renderController()

    const button = getByText(title)
    fireEvent.press(button)

    expect(navigation.navigate).toHaveBeenCalledWith('Detail', { title, description, image, url })
  })
})

const renderView = (articles: Article[] = aSetOfArticles()) => {
  const onArticlePress = jest.fn()

  return { ...render(<Feed articles={articles} onArticlePress={onArticlePress} />), onArticlePress }
}

const renderController = () => {
  const navigation = { navigate: jest.fn() } as unknown as NavigationProp<'Feed'>
  const route = jest.fn() as unknown as RouteProp<'Feed'>

  return { ...render(<FeedController navigation={navigation} route={route} />), navigation, route }
}
