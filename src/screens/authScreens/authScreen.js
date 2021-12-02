import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {useNavigation} from '@react-navigation/native';

import style from './authScreen.style';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const goTo = destination => {
    navigation.navigate(destination);
  };

  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Text style={style.welcomingTextStyle}>Bienvenue sur</Text>
        <Text style={style.appNameStyle}>Laitue Guacamole Banane Tomate</Text>
      </View>
      <ImageBackground
        style={style.backgroundImageStyle}
        source={require('../../../assets/img/appIcon.png')}
      />
      <View style={style.buttonContainer}>
        <TouchableOpacity
          style={style.submitButton}
          onPress={() => goTo('login')}>
          <Text>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.submitButton}
          onPress={() => goTo('signUp')}>
          <Text>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
