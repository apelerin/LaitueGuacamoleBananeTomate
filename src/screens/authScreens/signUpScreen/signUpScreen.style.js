import {StyleSheet} from 'react-native';

import {
  lavenderBlush,
  lightSkyBlue,
  blueMunshell,
} from '../../../../assets/colors';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: lavenderBlush,
  },

  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginTop: 10,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000000',
    marginBottom: 20,
  },

  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },

  inputFieldsContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },

  inputFields: {
    borderWidth: 2,
    borderColor: blueMunshell,
    borderRadius: 5,
    height: 40,
    width: 330,
    marginVertical: 15,
    paddingStart: 10,
    backgroundColor: lightSkyBlue,
  },

  footerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },

  submitButton: {
    borderWidth: 2,
    borderRadius: 10,
    height: 30,
    width: 150,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginBottom: 20,
  },
});

export default style;
