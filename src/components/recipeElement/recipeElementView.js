import React from 'react';
import style from './recipeElementView.style';
import {TouchableOpacity, Text, Image, View} from 'react-native';

const RecipeElementView = ({recipe}) => {
  return (
    <TouchableOpacity style={style.itemStyle} onPress={() => {}}>
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
