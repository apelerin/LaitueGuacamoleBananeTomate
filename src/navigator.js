import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import listRecipeView from './screens/listRecipeView/listRecipeView'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="recipeList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="recipeList" component={listRecipeView} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
