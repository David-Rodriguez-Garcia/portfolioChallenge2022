import { Text, View, Image, Button } from 'react-native'

type Props = {
  title: string
  description: string
  image: string
  onPress: () => void
}

export const Detail = ({ title, description, image, onPress }: Props) => (
  <View testID="detailScreen">
    <Image testID="articleImage" style={{ height: 50, width: 50 }} source={{ uri: image }} />
    <Text>{title}</Text>
    <Text>{description}</Text>
    <Button testID="getArticleButton" title="Open in web" onPress={onPress} />
  </View>
)
