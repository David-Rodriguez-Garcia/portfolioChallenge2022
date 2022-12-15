import { Image, Button } from 'react-native'

import { Box } from '../_components/_objects/Box'
import { Text } from '../_components/atoms/Text'

type Props = {
  title: string
  description: string
  image: string
  onPress: () => void
}

export const Detail = ({ title, description, image, onPress }: Props) => (
  <Box vertical="spaceAround" testID="detailScreen">
    <Image
      style={{ height: 100, width: 100, alignSelf: 'center' }}
      source={{ uri: image }}
      testID="articleImage"
    />
    <Text bold="strong" size="big" center>
      {title}
    </Text>
    <Text center>{description}</Text>
    <Button title="Open in web" onPress={onPress} testID="getArticleButton" />
  </Box>
)
