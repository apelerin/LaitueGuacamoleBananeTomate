import React, {useCallback, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import style from './signUpScreen.style';

const SignUpScreen = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMDPValid, setIsMDPValid] = useState(true);
  const [isConfMDPValid, setIsConfMDPValid] = useState(true);

  const navigation = useNavigation();

  const addUserToStorage = () => {
    let id;
    AsyncStorage.getItem('lastId', (err, result) => {
      result = result === null ? 0 : JSON.parse(result);
      id = result;
      AsyncStorage.setItem('lastId', JSON.stringify(result + 1));
    });
    const user = {
      nickname: nickname,
      password: password,
      id: id,
    };
    setNickname('');
    setPassword('');
    setConfirmPassword('');
    AsyncStorage.getItem('users', (err, result) => {
      result = result === null ? [] : JSON.parse(result);
      result.push(user);
      AsyncStorage.setItem('users', JSON.stringify(result));
    });
  };

  const validateConfMdp = useCallback(() => {
    setIsConfMDPValid(confirmPassword === password);
  }, [confirmPassword, password]);

  const validateMDP = useCallback(() => {
    setIsMDPValid(password.length >= 3);

    if (confirmPassword) {
      validateConfMdp();
    }
  }, [confirmPassword, password, validateConfMdp]);

  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Text style={style.title}>Inscription</Text>
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
          style={[
            style.inputFields,
            {borderColor: isMDPValid ? 'black' : 'red'},
          ]}
          placeholder="Mot de passe"
          secureTextEntry={true}
          keyboardType="ascii-capable"
          value={password}
          onChangeText={setPassword}
          onEndEditing={validateMDP}
        />
        <TextInput
          style={[
            style.inputFields,
            {borderColor: isConfMDPValid ? 'black' : 'red'},
          ]}
          placeholder="Confirmation du mot de passe"
          secureTextEntry={true}
          keyboardType="ascii-capable"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onEndEditing={validateConfMdp}
        />
      </View>
      <View style={style.footerContainer}>
        <TouchableOpacity
          style={style.submitButton}
          onPress={addUserToStorage}
          disabled={!isMDPValid || !isConfMDPValid}>
          <Text>Envoyer</Text>
        </TouchableOpacity>
        <Button title={'Retour'} onPress={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};
export default SignUpScreen;
