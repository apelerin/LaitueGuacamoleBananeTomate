import {StyleSheet} from 'react-native';

import {
  lavenderBlush,
  lavenderBlushDark,
  lavenderBlushDarker,
} from '../../../assets/colors';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: lavenderBlush,
  },

  headerContainer: {
    borderBottomWidth: 2,
    borderColor: lavenderBlushDarker,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 400,
    backgroundColor: lavenderBlushDark,
  },

  headerTextStyle: {
    marginHorizontal: 5,
    fontFamily: 'Bittermilk',
    fontSize: 40,
  },
});

export default style;
