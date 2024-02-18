import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/usersReducer';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleLogin() {
    // if (username.trim() === '' || password.trim() === '')
    if (
      username.trim() === '' ||
      password.trim() === '' ||
      (username !== 'ognjenr02' && password !== '123')
    ) {
      alert('Please enter correct username and password!');
      // alert('Please enter both username and password.');
      return;
    }

    try {
      console.log(username);
      console.log(password);

      const response = await axios.post('http://192.168.1.5:8080/login', {
        // username: username,
        // password: password,

        username: 'ognjenr02',
        password: '123',
      });
      const { token } = response.data;
      console.log(token);

      if (token) {
        await AsyncStorage.setItem('token', token);
        dispatch(setToken(token));
        navigation.navigate('Home');
      } else {
        // Handle login failure
        console.log('Login failed: No token received');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login error: ' + error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prijava</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button
        color={GlobalStyles.colors.primary400}
        title="Login"
        onPress={handleLogin}
      />
      <Button
        color={GlobalStyles.colors.primary400}
        title="Sign up"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 765,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray500,
    borderRadius: 5,
  },
});
