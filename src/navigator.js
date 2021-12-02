import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RecipeListScreen from './screens/recipeListScreen';
import DetailScreen from './screens/detailscreendir/detailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="DetailScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="recipeList" component={RecipeListScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
