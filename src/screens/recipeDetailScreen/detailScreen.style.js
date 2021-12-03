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
    borderWidth: 2,
    borderTopWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 30,
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
    marginVertical: 10,
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
  },

  ingredientTextStyle: {
    marginVertical: 3,
    fontSize: 15,
    fontWeight: 'bold',
  },

  recipeStepsTextStyle: {
    fontSize: 17,
  },

  likeContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  likeButtonStyle: {
    marginHorizontal: 20,
    width: 60,
    height: 60,
  },
});

export default style;
