import React from 'react'
import { View } from 'react-native'

type Props = {
  children: React.ReactNode
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
}

export const Row = ({ children, ...props }: Props) => {
  return <View style={{ flexDirection: 'row', ...props }}>{children}</View>
}
