import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import style from './likedRecipeListScreen.style';
import RecipeElementView from '../../components/recipeElement/recipeElementView';

const renderRecipeItem = item => {
  return <RecipeElementView recipe={item} />;
};

const LikedRecipeListView = () => {
  const [recipeList, setRecipeList] = useState([]);

  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Text
          style={[
            style.headerTextStyle,
            {color: '#84e09b', fontWeight: 'bold'},
          ]}>
          L.
        </Text>
        <Text
          style={[
            style.headerTextStyle,
            {color: '#207836', fontWeight: 'bold'},
          ]}>
          G.
        </Text>
        <Text
          style={[
            style.headerTextStyle,
            {color: '#e0d42b', fontWeight: 'bold'},
          ]}>
          B.
        </Text>
        <Text
          style={[
            style.headerTextStyle,
            {color: '#d43d2c', fontWeight: 'bold'},
          ]}>
          T.
        </Text>
      </View>
      <FlatList
        data={recipeList}
        renderItem={({item}) => renderRecipeItem(item)}
      />
    </SafeAreaView>
  );
};

export default LikedRecipeListView;
