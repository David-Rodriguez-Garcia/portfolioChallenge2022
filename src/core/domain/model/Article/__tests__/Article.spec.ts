import { ONE_YEAR_MILLIS } from '../../../utils'
import { anArticle, aSetOfArticles, sortArticles } from '../Article.model'

describe('Article', () => {
  describe('anArticle builder', () => {
    it('returns an article', () => {
      const received = anArticle()
      const requiredProps = ['id', 'date', 'image', 'title', 'description', 'url']

      requiredProps.forEach((prop) => {
        expect(received).toHaveProperty(prop)
      })
      expect(Object.keys(received)).toHaveLength(requiredProps.length)
    })

    it('returns an article with unique ID', () => {
      const received1 = anArticle()
      const received2 = anArticle()

      expect(received1.id).not.toEqual(received2.id)
    })

    it('returns an article with arbitrary date', () => {
      const received1 = anArticle()
      const received2 = anArticle()

      expect(received1.date.getTime()).not.toEqual(received2.date.getTime())
    })

    it('returns an article with custom properties', () => {
      const customArticle = {
        id: 'myId',
        date: new Date('06/03/2020'),
        image: 'path/to/image',
        title: 'Custom Title',
        description: 'Lorem ipsum Donor',
        url: 'https://google.com',
      }
      const received = anArticle(customArticle)

      expect(received).toEqual(customArticle)
    })
  })

  describe('aSetOfArticles builder', () => {
    it('returns elements of type article', () => {
      const received = aSetOfArticles()
      const requiredProps = ['id', 'date', 'image', 'title', 'description', 'url']

      requiredProps.forEach((prop) => {
        expect(received[1]).toHaveProperty(prop)
      })
    })

    it('returns expected number of articles', () => {
      const expectedSize = 13
      const received = aSetOfArticles(expectedSize)

      expect(received).toHaveLength(expectedSize)
    })
  })

  describe('sortArticles', () => {
    it('returns articles sorted', () => {
      const sortedArticles = [
        anArticle({ date: new Date(Date.now() - ONE_YEAR_MILLIS * 4) }),
        anArticle({ date: new Date(Date.now() - ONE_YEAR_MILLIS * 3) }),
        anArticle({ date: new Date(Date.now() - ONE_YEAR_MILLIS * 2) }),
        anArticle({ date: new Date(Date.now() - ONE_YEAR_MILLIS) }),
      ]
      const unsortedArticles = [
        sortedArticles[1],
        sortedArticles[0],
        sortedArticles[3],
        sortedArticles[2],
      ]

      const received = sortArticles(unsortedArticles)

      expect(received).toEqual(sortedArticles)
    })

    it('does not modify existing array', () => {
      const unsortedArticles = [
        anArticle({ date: new Date(Date.now() - ONE_YEAR_MILLIS * 3) }),
        anArticle({ date: new Date(Date.now() - ONE_YEAR_MILLIS * 4) }),
        anArticle({ date: new Date(Date.now() - ONE_YEAR_MILLIS) }),
        anArticle({ date: new Date(Date.now() - ONE_YEAR_MILLIS * 2) }),
      ]

      const unsortedArticlesCopy = [...unsortedArticles]

      sortArticles(unsortedArticles)
      expect(unsortedArticles).toEqual(unsortedArticlesCopy)
    })
  })
})
