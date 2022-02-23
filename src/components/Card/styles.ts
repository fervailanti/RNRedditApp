import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 16,
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
    height: 54,
    width: 54,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    marginLeft: 12,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
    flex: 1,
    flexWrap: 'wrap',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
    flex: 1,
    flexWrap: 'wrap',
  },
  firstIndicator: {
    flexDirection: 'row',
  },
  indicator: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  indicatorLabel: {
    fontSize: 14,
    marginRight: 2,
    fontWeight: 'bold',
    color: '#999',
  },
  indicatorText: {
    fontWeight: 'normal',
    fontSize: 14,
    color: '#999',
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
})
