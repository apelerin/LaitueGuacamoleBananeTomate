import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DetailScreen from './screens/recipeDetailScreen/detailScreen';
import RecipeListView from './screens/listRecipeView/recipeListView';
import SignUpScreen from './screens/authScreens/signUpScreen/signUpScreen';
import LoginScreen from './screens/authScreens/loginScreen/loginScreen';
import AuthScreen from './screens/authScreens/authScreen';
import LikedRecipeListView from './screens/likedRecipeListScreen/likedRecipeListScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="recipeList" component={RecipeListView} />
      <Tab.Screen name="likedRecipeList" component={LikedRecipeListView} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const [isLogged, setLogged] = useState(false);
  const [userId, setUserId] = useState({});

  const setLoggedFunction = value => {
    setLogged(value.authState);
    setUserId(value.userId);
  };

  return (
    <Stack.Navigator
      initialRouteName="authRouter"
      screenOptions={{
        headerShown: false,
      }}>
      {isLogged ? (
        <>
          <Stack.Screen name="Tab" component={TabNavigator} />
          <Stack.Screen name="detailScreen" component={DetailScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="authRouter" component={AuthScreen} />
          <Stack.Screen name="signUp" component={SignUpScreen} />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            initialParams={{setLogged: setLoggedFunction}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
