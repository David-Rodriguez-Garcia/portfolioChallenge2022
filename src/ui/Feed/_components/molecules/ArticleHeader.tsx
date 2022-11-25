import { Text } from 'react-native'

import { Row } from '../../_objects/Row'

type Props = {
  title: string
  date: Date
}

export const ArticleHeader = ({ title, date }: Props) => (
  <Row justifyContent="space-between">
    <Text>{title}</Text>
    <Text>{date.toLocaleDateString()}</Text>
  </Row>
)
