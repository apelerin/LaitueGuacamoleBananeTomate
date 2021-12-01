import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RecipeListScreen from './screens/RecipeListScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="recipeList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="recipeList" component={RecipeListScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
