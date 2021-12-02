import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigator';

import axios from 'axios';
const baseUrl = 'https://www.themealdb.com/api/json';

const App = () => {
  // Invoking get method to perform a GET request
  axios.get(`${baseUrl}/v1/1/search.php?s=Arrabiata`).then(response => {
    console.log(response.data);
  });

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
