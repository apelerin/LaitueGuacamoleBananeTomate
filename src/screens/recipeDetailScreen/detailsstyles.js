import React from 'react';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: '#E2FCEB',
    flex: 3,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#048B9A',
  },
  Image2: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  ingredient: {
    flex: 1,
  },
});
