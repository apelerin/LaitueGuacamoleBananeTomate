import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const goTo = destination => {
    navigation.navigate(destination);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => goTo('login')}>
        <Text>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => goTo('signUp')}>
        <Text>S'inscrire</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
export default SignUpScreen;
