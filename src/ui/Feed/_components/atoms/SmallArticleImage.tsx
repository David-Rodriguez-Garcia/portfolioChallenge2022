import { Image } from 'react-native'

type Props = { image: string }

export const SmallArticleImage = ({ image }: Props) => {
  return (
    <Image
      testID="smallArticleImage"
      source={{ uri: image }}
      style={{
        height: 50,
        width: 50,
      }}
    />
  )
}
