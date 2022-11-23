import { anArticle, aSetOfArticles } from '../Feed.model'

describe('Feed', () => {
  describe('anArticle builder', () => {
    it('returns an article', () => {
      const received = anArticle()
      const requiredProps = ['id', 'date', 'img', 'title', 'description', 'url']

      requiredProps.forEach((prop) => {
        expect(received).toHaveProperty(prop)
      })
      expect(Object.keys(received)).toHaveLength(requiredProps.length)
    })

    it('returns an article with custom properties', () => {
      const customArticle = {
        id: 'myId',
        date: new Date('06/03/2020'),
        img: 'path/to/image',
        title: 'Custom Title',
        description: 'Lorem ipsum Donor',
        url: 'https://google.com',
      }
      const received = anArticle(customArticle)

      expect(received).toEqual(customArticle)
    })
  })

  describe('aSetOfArticles builder', () => {
    it('returned element is an article', () => {
      const received = aSetOfArticles()
      const requiredProps = ['id', 'date', 'img', 'title', 'description', 'url']

      requiredProps.forEach((prop) => {
        expect(received[1]).toHaveProperty(prop)
      })
    })

    it('returns articles with unique IDs', () => {
      const received = aSetOfArticles()

      const IDs = received.map((article) => article.id)
      const uniqueIDs = [...new Set(IDs)]

      expect(IDs).toHaveLength(uniqueIDs.length)
    })

    it('returns articles with unique dates', () => {
      const received = aSetOfArticles()

      const dates = received.map((article) => article.date.toLocaleString())
      const uniqueDates = [...new Set(dates)]

      expect(dates).toHaveLength(uniqueDates.length)
    })

    it('returns expected number of articles', () => {
      const expectedSize = 13
      const received = aSetOfArticles(expectedSize)

      expect(received).toHaveLength(expectedSize)
    })

    it('returns expected number of articles with unique IDs', () => {
      const expectedSize = 17
      const received = aSetOfArticles(expectedSize)

      const IDs = received.map((article) => article.id)
      const uniqueIDs = [...new Set(IDs)]

      expect(IDs).toHaveLength(uniqueIDs.length)
    })
  })
})
