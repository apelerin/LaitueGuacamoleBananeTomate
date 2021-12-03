import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  Image,
  Text,
  FlatList,
  View,
  ScrollView,
} from 'react-native';
import style from './detailScreen.style';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <Text style={style.ingredientTextStyle}>
      {item.ingredient} --------- {item.measure}
    </Text>
  );

  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Text style={style.recipeTitle}>{meal.strMeal}</Text>
      </View>
      <View style={style.descriptionContainer}>
        <FlatList
          data={ingredientList}
          renderItem={renderItem}
          style={{marginBottom: 70}}
          ListHeaderComponent={() => {
            return (
              <Image
                source={{uri: meal.strMealThumb}}
                style={style.recipePicture}
              />
            );
          }}
          ListFooterComponent={() => {
            return (
              <>
                <Text style={style.recipeStepsTextStyle}>
                  {meal.strInstructions}
                </Text>
                <View style={style.likeButtonsContainer}>
                  <View style={style.likeContainer}>
                    <Image
                      source={require('../../../assets/img/yummy.png')}
                      style={style.likeButtonStyle}
                    />
                    <Text style={style.likeTextStyle}>YUMMY</Text>
                  </View>
                  <View style={style.likeContainer}>
                    <Image
                      source={require('../../../assets/img/puking.png')}
                      style={style.likeButtonStyle}
                    />
                    <Text style={style.likeTextStyle}>PUKKY</Text>
                  </View>
                </View>
              </>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
