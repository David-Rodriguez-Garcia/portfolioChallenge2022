import { Text, View } from 'react-native'

type Props = {
  title: string
  description: string
}

export const Detail = ({ title, description }: Props) => (
  <View testID="detailScreen">
    <Text>{title}</Text>
    <Text>{description}</Text>
  </View>
)
