import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailScreen from './screens/detailscreendir/detailScreen';
import RecipeListView from './screens/listRecipeView/recipeListView';
import SignUpScreen from './screens/authScreens/signUpScreen/signUpScreen';
import LoginScreen from './screens/authScreens/loginScreen/loginScreen';
import AuthScreen from './screens/authScreens/authScreen';

const Stack = createNativeStackNavigator();

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
          <Stack.Screen name="recipeList" component={RecipeListView} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
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
