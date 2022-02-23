import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  top: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 2,
  },
  bottom: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
  },
  indicatorLast: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  indicatorLabel: {
    fontSize: 12,
    marginRight: 2,
    fontWeight: 'bold',
    color: '#999',
  },
  indicatorIcon: {
    marginRight: 2,
  },
  indicatorText: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#999',
  },
  title: {
    fontSize: 14,
  },
  flex: {
    flex: 1,
  },
})
