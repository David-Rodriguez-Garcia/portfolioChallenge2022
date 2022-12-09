import { createContainer, asFunction } from 'awilix'

import { Article } from '../domain/model/Article/Article'
import { aSetOfArticles } from '../domain/model/Article/Article.model'

type containerProps = {
  getArticles: Article[]
}

export const container = createContainer<containerProps>()

container.register({
  getArticles: asFunction(() => aSetOfArticles()),
})
