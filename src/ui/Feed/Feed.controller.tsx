import { container } from '../../core/_di'
import { Article } from '../../core/domain/model/Article/Article'
import { sortArticles } from '../../core/domain/model/Article/Article.model'
import { FeedProps, DetailRouteParams } from '../_navigation/NavigationTypes'
import { Feed } from './Feed'

export const FeedController = ({ navigation }: FeedProps) => {
  const getArticleDetail = (params: DetailRouteParams) => navigation.navigate('Detail', params)
  const articles = sortArticles(container.resolve<Article[]>('getArticles'))

  return <Feed articles={articles} onArticlePress={getArticleDetail} />
}
