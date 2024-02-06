import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './HomeScreen';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        title="Prijava"
        onPress={handleLogin}
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
  message: {
    marginTop: 20,
    color: 'red',
  },
  button: {
    paddingTop: 20,
  },
});
