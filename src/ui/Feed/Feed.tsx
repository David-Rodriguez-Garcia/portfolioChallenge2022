import { View, Text } from 'react-native'
import { Article } from '../../core/domain/model/Feed'

const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dignissim mauris, eget auctor ante. Nunc et mauris odio. Vestibulum erat turpis, commodo vitae bibendum et, fringilla vel urna. Suspendisse nisi ipsum, congue vel purus nec, vulputate mollis dolor. Donec venenatis mauris at tincidunt pharetra. Morbi pharetra justo lacus, vel condimentum odio dictum ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis id turpis molestie, vehicula neque vel, dignissim tellus. Vestibulum sodales ipsum metus, eget porttitor diam faucibus ut. Pellentesque nec pharetra augue. '

const FakeData: Article[] = [
  {
    img: 'URL_TO_IMAGE_0',
    title: 'TITLE_0',
    description: loremText,
    url: 'URL_TO_ARTICLE_0',
  },
  {
    img: 'URL_TO_IMAGE_1',
    title: 'TITLE_1',
    description: loremText,
    url: 'URL_TO_ARTICLE_1',
  },
  {
    img: 'URL_TO_IMAGE_2',
    title: 'TITLE_2',
    description: loremText,
    url: 'URL_TO_ARTICLE_2',
  },
  {
    img: 'URL_TO_IMAGE_3',
    title: 'TITLE_3',
    description: loremText,
    url: 'URL_TO_ARTICLE_3',
  },
  {
    img: 'URL_TO_IMAGE_4',
    title: 'TITLE_4',
    description: loremText,
    url: 'URL_TO_ARTICLE_4',
  },
  {
    img: 'URL_TO_IMAGE_5',
    title: 'TITLE_5',
    description: loremText,
    url: 'URL_TO_ARTICLE_5',
  },
  {
    img: 'URL_TO_IMAGE_6',
    title: 'TITLE_6',
    description: loremText,
    url: 'URL_TO_ARTICLE_6',
  },
]

export const Feed = () => (
  <View>
    <Text>This is the Feed!</Text>
  </View>
)
