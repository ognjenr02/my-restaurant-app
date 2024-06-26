import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { addUser, setToken } from '../redux/usersReducer';
import CustomButton from '../components/buttons/CustomButton';
//@ts-ignore
import { APP_HOST } from '@env';

// const window = Dimensions.get('window');
// const isTablet = window.width >= 768;

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername]: any = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleLogin() {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter correct username and password!');
      return;
    }

    try {
      console.log(username);
      console.log(password);

      const response = await axios.post(`http://${APP_HOST}:8080/login`, {
        username: username,
        password: password,
      });
      const { token } = response.data;
      console.log(token);

      if (token) {
        await AsyncStorage.setItem('token', token);
        dispatch(setToken(token));
        dispatch(addUser(username));
        navigation.navigate('Home');
      } else {
        console.log('Login failed: No token received');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login error: ' + error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login or Sign Up</Text>
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
      <CustomButton title="Login" onPress={handleLogin} />
      <CustomButton
        title="Sign Up"
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
  containerTablet: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary50,
    paddingHorizontal: '10%', // Add more padding for tablets
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
