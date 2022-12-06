import { Text, View } from 'react-native'

type Props = {
  title: string
}

export const Detail = ({ title }: Props) => (
  <View testID="detailScreen">
    <Text>{title}</Text>
  </View>
)
