import { Icon } from '@components'
import { colors } from '@utils/colors'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

type ButtonProps = {
  children?: string
  color?: string
  icon?: string
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({
  color = colors.primary,
  icon,
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity style={styles(color).button} onPress={onPress}>
      {!!icon && <Icon color={color} name={icon} />}
      {!!children && <Text style={styles(color).text}>{children}</Text>}
    </TouchableOpacity>
  )
}

export default Button
