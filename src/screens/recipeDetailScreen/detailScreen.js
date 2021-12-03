import React, {useEffect, useState} from 'react';

import {SafeAreaView, Image, Text, FlatList} from 'react-native';
import styles from './detailsstyles.js';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

const DetailScreen = () => {
  const route = useRoute();
  const [meal, setMeal] = useState({});
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let mealTmp;
      await axios
        .get(`${baseUrl}/lookup.php?i=${route.params.idMeal}`)
        .then(response => {
          mealTmp = response.data.meals[0];
        });
      setMeal(mealTmp);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const tmpList = [];
    for (let i = 1; i < 21; i++) {
      if (
        meal[`strIngredient${i}`] === '' ||
        meal[`strIngredient${i}`] === null
      ) {
        break;
      }
      tmpList.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
    setIngredientList(tmpList);
  }, [meal]);

  const renderItem = ({item}) => (
    <Text>
      {item.ingredient} --------- {item.measure}
    </Text>
  );

  return (
    <SafeAreaView>
      <Text>{meal.strMeal}</Text>
      <Image source={{uri: meal.strMealThumb}} style={styles.image} />
      <FlatList data={ingredientList} renderItem={renderItem} />
      <Text>{meal.strInstructions}</Text>
    </SafeAreaView>
  );
};

export default DetailScreen;
