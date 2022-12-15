import { Text as BaseText, TextProps } from 'react-native'

import { FontSizeType, FontWeightType, toSize, toWeight } from '../../_styles/Font'

type Props = {
  size?: FontSizeType
  bold?: FontWeightType
  center?: boolean
} & TextProps

export const Text = ({ size = 'small', bold = 'light', center = false, ...textProps }: Props) => {
  return (
    <BaseText
      style={{
        fontSize: toSize(size),
        fontWeight: toWeight(bold),
        textAlign: center ? 'center' : 'left',
      }}
      {...textProps}
    />
  )
}
