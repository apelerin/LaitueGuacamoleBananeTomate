import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import style from './likedRecipeListScreen.style';
import RecipeElementView from '../../components/recipeElement/recipeElementView';

const renderRecipeItem = item => {
  return <RecipeElementView recipe={item} />;
};

const LikedRecipeListView = () => {
  const [recipeList, setRecipeList] = useState([]);

  return (
    <SafeAreaView style={style.mainContainer}>
      <FlatList
        data={recipeList}
        renderItem={({item}) => renderRecipeItem(item)}
      />
    </SafeAreaView>
  );
};

export default LikedRecipeListView;
