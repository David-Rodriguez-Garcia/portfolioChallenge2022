import React from 'react'
import { View } from 'react-native'

export const Row = ({ children }: { children: React.ReactNode }) => {
  return <View style={{ flexDirection: 'row' }}>{children}</View>
}
