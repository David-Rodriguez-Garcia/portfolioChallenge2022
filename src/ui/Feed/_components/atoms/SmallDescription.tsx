import { ReactNode } from 'react'
import { Text } from 'react-native'

type Props = {
  children: ReactNode
}

export const SmallDescription = ({ children }: Props) => (
  <Text numberOfLines={2} ellipsizeMode="tail">
    {children}
  </Text>
)
