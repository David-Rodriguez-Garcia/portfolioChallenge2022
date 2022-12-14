import { ReactNode } from 'react'

import { Text } from '../../../_components/atoms/Text'

type Props = {
  children: ReactNode
}

export const SmallDescription = ({ children }: Props) => (
  <Text numberOfLines={2} ellipsizeMode="tail">
    {children}
  </Text>
)
