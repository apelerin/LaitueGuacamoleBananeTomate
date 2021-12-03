import {StyleSheet} from 'react-native';

import {lavenderBlushDark, lavenderBlushDarker} from '../../../assets/colors';

const style = StyleSheet.create({
  itemContainer: {
    marginVertical: 10,
    backgroundColor: lavenderBlushDark,
    borderWidth: 2,
    borderRadius: 13,
    borderColor: lavenderBlushDarker,
    width: 370,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  foodPictureStyle: {
    borderRadius: 13,
    width: 100,
    height: 100,
  },

  descriptionContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: 270,
    height: 100,
  },

  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginStart: 10,
    marginTop: 5,
  },

  likeContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: 270,
    marginBottom: 5,
  },

  likePictureStyle: {
    width: 35,
    height: 35,
  },

  likeNumberStyle: {
    marginEnd: 30,
    marginStart: 5,
    fontSize: 20,
    fontFamily: 'Trebuchet MS',
  },
});

export default style;
