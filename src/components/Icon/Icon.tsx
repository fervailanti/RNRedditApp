import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { getIconFamily, IconFamily } from './iconFamilies'

interface IconProps {
  family?: IconFamily
  color?: string
  size?: number
  style?: StyleProp<TextStyle>
  name: string
}

const Icon: React.FC<IconProps> = ({
  family = 'MaterialCommunityIcons',
  color = '#999',
  size = 16,
  style,
  name,
}) => {
  const Component = getIconFamily(family)
  return <Component color={color} name={name} size={size} style={style} />
}

export default Icon

export type { IconFamily }
