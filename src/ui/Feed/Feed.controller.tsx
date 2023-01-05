import { useQuery } from '@tanstack/react-query'

import { container } from '../../core/_di'
import { sortArticles } from '../../core/domain/model/Article/Article.model'
import { FeedProps, DetailRouteParams } from '../_navigation/NavigationTypes'
import { Feed } from './Feed'

export const FeedController = ({ navigation }: FeedProps) => {
  const getArticleDetail = (params: DetailRouteParams) => navigation.navigate('Detail', params)

  const { data: articles } = useQuery({
    queryKey: ['getArticles'],
    queryFn: async () => {
      const unsortedArticles = await container.resolve('getArticles')
      return sortArticles(unsortedArticles)
    },
  })

  return <Feed articles={articles ?? []} onArticlePress={getArticleDetail} />
}
