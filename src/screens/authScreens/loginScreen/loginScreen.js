import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './loginScreen.style';

const LoginScreen = () => {
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  const route = useRoute();

  const login = () => {
    AsyncStorage.getItem('users', (err, result) => {
      result = result === null ? [] : JSON.parse(result);
      if (result === []) {
        return;
      }
      const userInStorage = result.find(
        element => element.nickname === nickname,
      );
      if (userInStorage === undefined) {
        return;
      }
      if (userInStorage.password === password) {
        route.params.setLogged({authState: true, userId: userInStorage.id});
      }
    });
    setNickname('');
    setPassword('');
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Text style={style.title}>Connection</Text>
        <Image
          style={style.profilePicture}
          source={require('../../../../assets/img/iconeProfile.jpg')}
        />
      </View>
      <View style={style.inputFieldsContainer}>
        <TextInput
          style={style.inputFields}
          placeholder="Pseudo"
          keyboardType="ascii-capable"
          value={nickname}
          onChangeText={setNickname}
        />
        <TextInput
          style={style.inputFields}
          placeholder="Mot de passe"
          secureTextEntry={true}
          keyboardType="ascii-capable"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={style.footerContainer}>
        <TouchableOpacity style={style.submitButton} onPress={login}>
          <Text>Envoyer</Text>
        </TouchableOpacity>
        <Button title={'Retour'} onPress={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
