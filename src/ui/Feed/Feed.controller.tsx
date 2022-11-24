import { aSetOfArticles, sortArticles } from '../../core/domain/model/Feed/Feed.model'
import { Feed } from './Feed'

const FakeData = sortArticles(aSetOfArticles(30))

export const FeedController = () => {
  return <Feed articles={FakeData} />
}
