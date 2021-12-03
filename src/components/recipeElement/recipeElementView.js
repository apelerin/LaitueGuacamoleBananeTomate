import React from 'react';
import style from './recipeElementView.style';
import {TouchableOpacity, Text, Image, View} from 'react-native';

const RecipeElementView = ({recipe}) => {
  return (
    <TouchableOpacity style={style.itemContainer} onPress={() => {}}>
      <Image
        style={style.foodPictureStyle}
        source={{uri: recipe.strMealThumb}}
      />
      <View style={style.descriptionContainer}>
        <Text style={style.titleText}>{recipe.strMeal}</Text>
        <View style={style.likeContainer}>
          <Image
            style={style.likePictureStyle}
            source={require('../../../assets/img/yummy.png')}
          />
          <Text style={[style.likeNumberStyle, {color: '#207836'}]}>38</Text>
          <Image
            style={style.likePictureStyle}
            source={require('../../../assets/img/puking.png')}
          />
          <Text style={[style.likeNumberStyle, {color: '#d43d2c'}]}>10</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeElementView;
