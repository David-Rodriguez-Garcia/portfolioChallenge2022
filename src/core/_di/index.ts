import { createContainer, asFunction } from 'awilix'

import { Article } from '../domain/model/Feed/Feed'
import { aSetOfArticles } from '../domain/model/Feed/Feed.model'

type containerProps = {
  getArticles: Article[]
}

export const container = createContainer<containerProps>()

container.register({
  getArticles: asFunction(() => aSetOfArticles()),
})
