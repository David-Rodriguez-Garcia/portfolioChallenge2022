import { ReactNode } from 'react'
import { View } from 'react-native'

import { PositionType, toContent } from '../../_styles/Position'

type Props = {
  children: ReactNode
  vertical?: PositionType
  testID?: string
}

export const Box = ({ children, vertical = 'start', testID }: Props) => (
  <View style={[{ flex: 1 }, { justifyContent: toContent(vertical) }]} testID={testID}>
    {children}
  </View>
)
