import { fireEvent, render } from '@testing-library/react-native'

import { Article } from '../../../core/domain/model/Feed/Feed'
import { anArticle, aSetOfArticles } from '../../../core/domain/model/Feed/Feed.model'
import { getArbitraryDate } from '../../../core/domain/utils'
import { Feed } from '../Feed'

describe('Feed', () => {
  it('displays the articles title', () => {
    const title1 = 'Title 1 text'
    const title2 = 'Title 2 text'
    const articles = [anArticle({ title: title1 }), anArticle({ title: title2 })]

    const { getByText } = renderFeed({ articles })

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

    const { getByText } = renderFeed({ articles })

    expect(getByText(description1)).toBeDefined()
    expect(getByText(description2)).toBeDefined()
  })

  it('displays the articles date', () => {
    const date1 = getArbitraryDate()
    const date2 = getArbitraryDate()

    const articles = [anArticle({ date: date1 }), anArticle({ date: date2 })]

    const { getByText } = renderFeed({ articles })

    expect(getByText(date1.toLocaleDateString())).toBeDefined()
    expect(getByText(date2.toLocaleDateString())).toBeDefined()
  })

  it('displays the mini article image', () => {
    const { getAllByTestId } = renderFeed()

    expect(getAllByTestId('smallArticleImage')).toBeDefined()
  })

  it('handles press', () => {
    const onArticlePress = jest.fn()
    const title = 'title1'
    const articles = [anArticle({ title })]

    const { getByText } = renderFeed({ articles, onArticlePress })

    const button = getByText(title)

    fireEvent.press(button)

    expect(onArticlePress).toHaveBeenCalled()
  })
})

const renderFeed = (props?: { articles?: Article[]; onArticlePress?: () => void }) => {
  const articles = props?.articles ?? aSetOfArticles()
  const onArticlePress = props?.onArticlePress ?? (() => null)

  return render(<Feed articles={articles} onArticlePress={onArticlePress} />)
}
