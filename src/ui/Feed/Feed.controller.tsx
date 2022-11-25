import { aSetOfArticles, sortArticles } from '../../core/domain/model/Feed/Feed.model'
import { Feed } from './Feed'

const FakeData = sortArticles(aSetOfArticles(30))

export const FeedController = () => {
  const getArticle = () => null

  return <Feed articles={FakeData} onArticlePress={getArticle} />
}
