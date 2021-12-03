import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, FlatList, RefreshControl, View, Text} from 'react-native';
import style from './listRecipeView.style';
import RecipeElementView from '../../components/recipeElement/recipeElementView';
import axios from 'axios';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

const renderRecipeItem = item => {
  return <RecipeElementView recipe={item} />;
};

const RecipeListView = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let list = [];
      for (let i = 0; i < 10; i++) {
        await axios.get(`${baseUrl}/random.php`).then(response => {
          const {idMeal, strMealThumb, strMeal} = response.data.meals[0];
          list.push({
            idMeal: idMeal,
            strMeal: strMeal,
            strMealThumb: strMealThumb,
          });
        });
      }
      setRecipeList(list);
    }
    fetchData();
  }, [toggle]);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setToggle(!toggle);
    wait(2000).then(() => setRefreshing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default RecipeListView;
