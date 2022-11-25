import { ReactNode } from 'react'
import { View } from 'react-native'

type Props = {
  children: ReactNode
}

export const Box = ({ children }: Props) => <View style={{ flex: 1 }}>{children}</View>
