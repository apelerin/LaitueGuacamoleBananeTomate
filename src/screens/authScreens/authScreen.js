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
        <View style={style.appNameContainer}>
          <Text
            style={[
              style.appNameStyle,
              {color: '#84e09b', fontWeight: 'bold'},
            ]}>
            L
          </Text>
          <Text style={[style.appNameStyle, {marginEnd: 12}]}>aitue</Text>
          <Text
            style={[
              style.appNameStyle,
              {color: '#207836', fontWeight: 'bold'},
            ]}>
            G
          </Text>
          <Text style={style.appNameStyle}>uacamole</Text>
        </View>
        <View style={style.appNameContainer}>
          <Text
            style={[
              style.appNameStyle,
              {color: '#e0d42b', fontWeight: 'bold'},
            ]}>
            B
          </Text>
          <Text style={[style.appNameStyle, {marginEnd: 12}]}>anane</Text>
          <Text
            style={[
              style.appNameStyle,
              {color: '#d43d2c', fontWeight: 'bold'},
            ]}>
            T
          </Text>
          <Text style={style.appNameStyle}>omate</Text>
        </View>
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
