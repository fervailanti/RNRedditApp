import { StyleSheet } from 'react-native'

export const styles = (color: string) =>
  StyleSheet.create({
    button: {
      margin: 4,
      paddingHorizontal: 6,
      paddingVertical: 4,
      borderWidth: 2,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: color,
    },
    text: {
      paddingHorizontal: 2,
      fontSize: 14,
      fontWeight: '600',
      textTransform: 'capitalize',
      color: color,
    },
  })
