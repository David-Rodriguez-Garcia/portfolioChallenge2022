import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type ScreensParamsList = {
  Feed: undefined
  Article: undefined
}

export type FeedProps = NativeStackScreenProps<ScreensParamsList, 'Feed'>

export type ArticleProps = NativeStackScreenProps<ScreensParamsList, 'Article'>
