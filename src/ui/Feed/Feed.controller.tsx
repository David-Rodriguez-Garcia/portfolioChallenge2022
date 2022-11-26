import { aSetOfArticles, sortArticles } from '../../core/domain/model/Feed/Feed.model'
import { FeedProps } from '../NavigationTypes'
import { Feed } from './Feed'

const FakeData = sortArticles(aSetOfArticles(30))

export const FeedController = ({ navigation }: FeedProps) => {
  const getArticleDetail = () => navigation.navigate('Detail')

  return <Feed articles={FakeData} onArticlePress={getArticleDetail} />
}
