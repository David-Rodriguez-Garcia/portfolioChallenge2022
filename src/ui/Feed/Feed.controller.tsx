import { container } from '../../core/_di'
import { Article } from '../../core/domain/model/Feed/Feed'
import { sortArticles } from '../../core/domain/model/Feed/Feed.model'
import { FeedProps, DetailRouteParams } from '../_navigation/NavigationTypes'
import { Feed } from './Feed'

export const FeedController = ({ navigation }: FeedProps) => {
  const getArticleDetail = ({ title }: DetailRouteParams) =>
    navigation.navigate('Detail', { title })
  const articles = sortArticles(container.resolve<Article[]>('getArticles'))

  return <Feed articles={articles} onArticlePress={getArticleDetail} />
}
