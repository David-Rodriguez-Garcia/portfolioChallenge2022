import { Text } from 'react-native'

import { Row } from '../../../_components/_objects/Row'

type Props = {
  title: string
  date: Date
}

export const ArticleHeader = ({ title, date }: Props) => (
  <Row vertical="spaceBetween">
    <Text>{title}</Text>
    <Text>{date.toLocaleDateString()}</Text>
  </Row>
)
