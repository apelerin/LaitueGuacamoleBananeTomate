import {StyleSheet} from 'react-native';

import {lightSkyBlue, blueMunshell} from '../../../assets/colors';

const style = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: 10,
  },

  titleText: {
    fontSize: 25,
    color: '#000000',
  },

  itemStyle: {
    marginVertical: 10,
    backgroundColor: lightSkyBlue,
    borderWidth: 2,
    borderRadius: 13,
    borderColor: blueMunshell,
    width: 390,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  foodPictureStyle: {
    borderRadius: 13,
    width: 100,
    height: 100,
  },
});

export default style;
