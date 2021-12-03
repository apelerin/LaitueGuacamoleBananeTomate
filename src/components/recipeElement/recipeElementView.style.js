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
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: 250,
  },

  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    margin: 10,
  },

  likeContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  likePictureStyle: {
    width: 45,
    height: 45,
  },

  likeNumberStyle: {
    marginEnd: 15,
    fontSize: 25,
  },
});

export default style;
