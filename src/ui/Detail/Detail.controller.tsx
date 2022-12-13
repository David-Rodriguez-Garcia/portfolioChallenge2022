import { Alert } from 'react-native'

import { openURL } from '../../core/infrastructure/Network'
import { DetailProps } from '../_navigation/NavigationTypes'
import { Detail } from './Detail'

export const DetailController = ({ route }: DetailProps) => {
  const { title, description, image, url } = route.params

  const getArticle = async () => {
    try {
      await openURL(url)
    } catch (error) {
      Alert.alert('ERORR', 'Article not found')
    }
  }

  return <Detail title={title} description={description} image={image} onPress={getArticle} />
}
