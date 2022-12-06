import { DetailProps } from '../_navigation/NavigationTypes'
import { Detail } from './Detail'

export const DetailController = ({ route }: DetailProps) => {
  const { title } = route.params

  return <Detail title={title} />
}
