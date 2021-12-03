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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },

  welcomingTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  appNameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  appNameStyle: {
    textAlign: 'center',
    fontFamily: 'Bittermilk',
    fontSize: 40,
  },

  backgroundImageStyle: {
    marginTop: 50,
    width: 150,
    height: 150,
  },

  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: 40,
  },

  submitButton: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: lavenderBlushDarker,
    height: 40,
    width: 180,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginVertical: 20,
    backgroundColor: lavenderBlushDark,
  },
});

export default style;
