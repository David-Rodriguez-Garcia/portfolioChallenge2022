import { RouteProp as BaseRouteProp } from '@react-navigation/core'
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type DetailRouteParams = {
  title: string
  description: string
  image: string
  url: string
}

export type ScreensParamsList = {
  Feed: undefined
  Detail: DetailRouteParams
}

export type FeedProps = NativeStackScreenProps<ScreensParamsList, 'Feed'>

export type DetailProps = NativeStackScreenProps<ScreensParamsList, 'Detail'>

export type NavigationProp<T extends keyof ScreensParamsList> = NativeStackNavigationProp<
  ScreensParamsList,
  T,
  undefined
>

export type RouteProp<T extends keyof ScreensParamsList> = BaseRouteProp<ScreensParamsList, T>
