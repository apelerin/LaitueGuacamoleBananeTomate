import React from 'react';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  lavenderBlush,
  lavenderBlushDark,
  lavenderBlushDarker,
} from '../../../assets/colors';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: lavenderBlush,
    flexDirection: 'column',
    alignItems: 'center',
  },

  headerContainer: {
    borderBottomWidth: 2,
    borderColor: lavenderBlushDarker,
    alignItems: 'center',
    width: 400,
    backgroundColor: lavenderBlushDark,
  },

  recipeTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
    marginVertical: 15,
  },

  descriptionContainer: {
    paddingHorizontal: 20,
  },

  recipePicture: {
    width: 240,
    height: 240,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 35,
  },

  ingredientTextStyle: {
    marginVertical: 3,
    fontSize: 15,
    fontWeight: 'bold',
  },

  recipeStepsTextStyle: {
    marginTop: 40,
    fontSize: 17,
  },

  likeButtonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  likeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  likeButtonStyle: {
    marginHorizontal: 20,
    width: 60,
    height: 60,
  },

  likeTextStyle: {
    fontSize: 15,
    fontFamily: 'Noteworthy-Bold',
    color: '#4E4E4E',
  },
});

export default style;
