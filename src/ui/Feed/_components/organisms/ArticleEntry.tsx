import { TouchableHighlight } from 'react-native'

import { Box } from '../../_objects/Box'
import { Row } from '../../_objects/Row'
import { SmallArticleImage } from '../atoms/SmallArticleImage'
import { SmallDescription } from '../atoms/SmallDescription'
import { ArticleHeader } from '../molecules/ArticleHeader'

type Props = {
  title: string
  description: string
  image: string
  date: Date
  onPress: () => void
}

export const ArticleEntry = ({ title, description, image, date, onPress }: Props) => (
  <TouchableHighlight onPress={onPress}>
    <Row>
      <SmallArticleImage image={image} />
      <Box>
        <ArticleHeader title={title} date={date} />
        <SmallDescription>{description}</SmallDescription>
      </Box>
    </Row>
  </TouchableHighlight>
)
