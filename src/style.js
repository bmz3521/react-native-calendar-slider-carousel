import { Platform, StyleSheet } from 'react-native';
import constants from './constants';

export default StyleSheet.create({
  singleContainer: {
    width: constants.DAY_SIZE,
    paddingHorizontal: 100,
    marginRight: 150,
  },
  singleDateBox: {
    overflow: 'hidden',
    // backgroundColor: 'red',
    height: 30,
    width: 100,
    flexDirection: 'column',
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // shadowOffset: {
    //   height: 0,
    //   width: 0,
    // },
    // elevation: 6,
    zIndex: 3,
  },
  singleContainerSelected: {
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 6,
  },
  closed: {
    // color: 'red',
  },
  monthContainerClosed: {
    // backgroundColor: 'red',
  },
  monthContainer: {
    height: 25,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  dateContainer: {
    height: 0,
  },
  dateText: {
    marginTop: Platform.OS === 'ios' ? 4 : 0,
    fontSize: 12,
    textAlign: 'center',
  },
  dayContainer: {
    height: 0,
  },
  dayText: {
    fontSize: Platform.OS === 'ios' ? 16 : 15,
    textAlign: 'center',
    color: '#000',
  },
  arrow: {
    height: 30,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
