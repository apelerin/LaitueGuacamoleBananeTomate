import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigator';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
