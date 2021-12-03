import React from 'react';
import style from './recipeElementView.style';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const RecipeElementView = ({recipe}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={style.itemStyle}
      onPress={() => {
        navigation.navigate('detailScreen', {
          idMeal: recipe.idMeal,
        });
      }}>
      <Image
        style={style.foodPictureStyle}
        source={{uri: recipe.strMealThumb}}
      />
      <View style={style.textContainer}>
        <Text style={style.titleText}>{recipe.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeElementView;
