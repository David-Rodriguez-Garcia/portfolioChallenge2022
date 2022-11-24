import { TouchableHighlight } from 'react-native'

import { Box } from '../../_objects/Box'
import { Row } from '../../_objects/Row'
import { SmallArticleImage } from '../atoms/SmallArticleImage'
import { SmallDescription } from '../atoms/SmallDescription'
import { ArticleHeader } from '../molecules/ArticleHeader'

type Props = {
  title: string
  date: Date
  description: string
  onPress: () => void
}

export const ArticleEntry = ({ title, date, description, onPress }: Props) => (
  <TouchableHighlight onPress={onPress}>
    <Row>
      <SmallArticleImage />
      <Box>
        <ArticleHeader title={title} date={date} />
        <SmallDescription>{description}</SmallDescription>
      </Box>
    </Row>
  </TouchableHighlight>
)
