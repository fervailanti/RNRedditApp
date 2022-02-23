import { colors } from '@utils/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    marginLeft: 4,
    fontSize: 24,
    color: colors.black,
    maxWidth: '90%',
  },
  container: {
    padding: 16,
  },
})
