import { Text, View, Image } from 'react-native'

type Props = {
  title: string
  description: string
  image: string
}

export const Detail = ({ title, description, image }: Props) => (
  <View testID="detailScreen">
    <Image testID="articleImage" style={{ height: 50, width: 50 }} source={{ uri: image }} />
    <Text>{title}</Text>
    <Text>{description}</Text>
  </View>
)
