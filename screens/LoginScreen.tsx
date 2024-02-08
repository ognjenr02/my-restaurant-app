import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './HomeScreen';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/usersReducer';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleLogin() {
    try {
      const response = await axios.get(
        'http://192.168.1.5:8080/login?username=' +
          username +
          '&password=' +
          password
      );
      const { data } = response;
      navigation.navigate('Home');

      if (data.token) {
        dispatch(setToken(data.token)); // dispatch the setToken action with the token as its payload
        console.log(data.token);
        await AsyncStorage.setItem('token', data.token);
      } else {
        // Handle login failure
      }
    } catch (error) {
      console.error(error);
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
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
