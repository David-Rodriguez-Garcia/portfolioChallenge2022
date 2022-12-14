import { ReactNode } from 'react'
import { View } from 'react-native'

import { PositionType, toContent } from '../../_styles/Position'

type Props = {
  children: ReactNode
  vertical?: PositionType
}

export const Row = ({ children, vertical = 'start' }: Props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: toContent(vertical) }}>{children}</View>
  )
}
