import { Row } from '../../../_components/_objects/Row'
import { Text } from '../../../_components/atoms/Text'

type Props = {
  title: string
  date: Date
}

export const ArticleHeader = ({ title, date }: Props) => (
  <Row vertical="spaceBetween">
    <Text bold="strong">{title}</Text>
    <Text bold="strong">{date.toLocaleDateString()}</Text>
  </Row>
)
