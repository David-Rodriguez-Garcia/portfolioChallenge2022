import { View, Text } from 'react-native'
import { Article } from '../../core/domain/model/Feed'

const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dignissim mauris, eget auctor ante. Nunc et mauris odio. Vestibulum erat turpis, commodo vitae bibendum et, fringilla vel urna. Suspendisse nisi ipsum, congue vel purus nec, vulputate mollis dolor. Donec venenatis mauris at tincidunt pharetra. Morbi pharetra justo lacus, vel condimentum odio dictum ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis id turpis molestie, vehicula neque vel, dignissim tellus. Vestibulum sodales ipsum metus, eget porttitor diam faucibus ut. Pellentesque nec pharetra augue. '

const aSetOfArticles = (num: number): Article[] => {
  return new Array(num).map((value, index) => ({
    img: 'https://reactnative.dev/img/tiny_logo.png',
    title: `title_${index}`,
    description: loremText,
    url: `URL_TO_ARTICLE_${index}`,
  }))
}

export const Feed = () => (
  <View>
    <Text>This is the Feed!</Text>
  </View>
)
