import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      if (userInStorage.password === password) {
        route.params.setLogged(true);
      }
    });
    setNickname('');
    setPassword('');
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Connection</Text>
        <Image
          style={styles.profilePicture}
          source={require('../../../../assets/img/iconeProfile.jpg')}
        />
      </View>
      <View style={styles.inputFieldsContainer}>
        <TextInput
          style={styles.inputFields}
          placeholder="Pseudo"
          keyboardType="ascii-capable"
          value={nickname}
          onChangeText={setNickname}
        />
        <TextInput
          style={styles.inputFields}
          placeholder="Mot de passe"
          secureTextEntry={true}
          keyboardType="ascii-capable"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={login}>
        <Text>Envoyer</Text>
      </TouchableOpacity>
      <Button title={'Retour'} onPress={navigation.goBack} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginTop: 10,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000000',
    marginBottom: 20,
  },

  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },

  inputFieldsContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },

  inputFields: {
    borderWidth: 1,
    borderColor: '#5B5B5B',
    borderRadius: 5,
    height: 40,
    width: 330,
    marginVertical: 15,
    paddingStart: 10,
    backgroundColor: '#EFEFEF',
  },

  submitButton: {
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 150,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginBottom: 20,
  },
});
export default LoginScreen;
