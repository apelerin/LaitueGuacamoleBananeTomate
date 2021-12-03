import React from 'react';
import style from './recipeElementView.style';
import {TouchableOpacity, Text, Image, View} from 'react-native';
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
