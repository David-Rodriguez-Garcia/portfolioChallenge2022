import { getArbitraryDate, cloneDeep } from '../../utils'
import { Article } from './Feed'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus condimentum eros non porttitor. Nullam lobortis eros sit amet lorem ullamcorper convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla laoreet auctor elit sit amet suscipit. Mauris ut leo libero. Vestibulum vulputate odio sed arcu vulputate, sit amet ornare leo vestibulum. Etiam leo nisl, posuere non magna ac, euismod volutpat ipsum. Aliquam vestibulum varius purus, sed faucibus diam elementum non. Praesent consectetur nec nibh quis auctor. Nulla convallis lectus tortor, in viverra lectus consectetur sed. Nullam non condimentum turpis. Ut in turpis in mi sagittis luctus. Mauris accumsan ornare nisl, in maximus lorem convallis vel. Vestibulum turpis mi, auctor vitae augue ac, congue feugiat orci. Mauris scelerisque turpis vitae egestas ultricies. Vivamus leo sapien, egestas quis aliquam sit amet, tincidunt a eros.'

const articleTemplate: Article = {
  id: 'id_1',
  date: new Date(),
  image: 'path/to/image',
  title: 'Fake article title',
  description: lorem,
  url: 'https://www.fakeUrl.com/fakeArticle',
}

export const anArticle = (options?: Partial<Article>): Article => ({
  ...articleTemplate,
  id: `id_${Math.random()}`,
  date: getArbitraryDate(),
  ...options,
})

export const aSetOfArticles = (size = 6) => {
  const set = []

  for (let c = 0; c < size; c++) {
    set.push(anArticle())
  }
  return set
}

export const sortArticles = (articles: Article[]) => {
  const articlesClone = cloneDeep(articles)

  return articlesClone.sort(
    (article_1, article_2) => article_1.date.getTime() - article_2.date.getTime()
  )
}
