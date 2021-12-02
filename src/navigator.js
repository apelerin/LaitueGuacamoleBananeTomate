import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import listRecipeView from './screens/listRecipeView/listRecipeView';
import SignUpScreen from './screens/authScreens/signUpScreen/signUpScreen';
import LoginScreen from './screens/authScreens/loginScreen/loginScreen';
import AuthScreen from './screens/authScreens/authScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLogged, setLogged] = useState(false);

  const makeLogged = value => {
    setLogged(value);
  };

  return (
    <Stack.Navigator
      initialRouteName="authRouter"
      screenOptions={{
        headerShown: false,
      }}>
      {isLogged ? (
        <>
          <Stack.Screen name="recipeList" component={listRecipeView} />
        </>
      ) : (
        <>
          <Stack.Screen name="authRouter" component={AuthScreen} />
          <Stack.Screen name="signUp" component={SignUpScreen} />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            initialParams={{setLogged: makeLogged}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
