import React, {Component} from 'react';

import {
  View,
  SafeAreaView,
  Image,
  Text,
  ListView,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './detailsstyles.js';

const imageUrl =
  'https://www.themealdb.com//images//media//meals//wvpsxx1468256321.jpg';

const DATA = [
  {
    id: 'strIngredient1',
    title: 'soy sauce',
  },
  {
    id: 'strIngredient2',
    title: 'water',
  },
  {
    id: 'strIngredient3',
    title: 'brown sugar',
  },
  {
    id: 'strIngredient4',
    title: 'ground ginger',
  },
  {
    id: 'strIngredient5',
    title: 'minced garlic',
  },
  {
    id: 'strIngredient6',
    title: 'cornstarch',
  },
  {
    id: 'strIngredient7',
    title: 'chicken breasts',
  },
];

const DetailScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View>
          <Text style={styles.text}> Le couscous </Text>
        </View>
        <View style={styles.Image2}>
          <Image source={{uri: imageUrl}} style={styles.image} />
        </View>
        <View>
          <View style={styles.ingredient} />
          <ol>
            {DATA.map((ingredient: {id: 'string', title: 'ingredient'}) => (
              <li>{ingredient}</li>
            ))}
          </ol>
        </View>
      </View>
      <View style={styles.picture}>
        <TextInput
          placeholder={'Partager votre plat!!'}
          style={styles.search}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
