import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type ScreensParamsList = {
  Feed: undefined
  Detail: undefined
}

export type FeedProps = NativeStackScreenProps<ScreensParamsList, 'Feed'>

export type DetailProps = NativeStackScreenProps<ScreensParamsList, 'Detail'>
