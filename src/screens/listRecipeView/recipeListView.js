import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import style from './listRecipeView.style';
import RecipeElementView from '../../components/recipeElement/recipeElementView';
import axios from 'axios';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

const renderRecipeItem = item => {
  return <RecipeElementView recipe={item} />;
};

const RecipeListView = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let list = [];
      for (let i = 0; i < 10; i++) {
        await axios.get(`${baseUrl}/random.php`).then(response => {
          const {idMeal, strMealThumb, strMeal} = response.data.meals[0];
          console.log(i);
          list.push({
            idMeal: idMeal,
            strMeal: strMeal,
            strMealThumb: strMealThumb,
          });
        });
      }
      console.log(list);
      setRecipeList(list);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={style.mainContainer}>
      <FlatList
        data={recipeList}
        renderItem={({item}) => renderRecipeItem(item)}
      />
    </SafeAreaView>
  );
};

export default RecipeListView;
