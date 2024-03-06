import { Button, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { GlobalStyles } from '../../constants';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

const Registration = () => {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });

  const registerUser = async (user: User): Promise<any> => {
    try {
      const response = await axios.post(
        'http://192.168.1.5:8080/registerUsers',
        user
      );

      console.log('User registered successfully');
      return response.data;

      // console.log('User registration failed');
      // return null;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        maxLength={25}
        onChangeText={(text) => setUser({ ...user, firstName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        maxLength={25}
        onChangeText={(text) => setUser({ ...user, lastName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setUser({ ...user, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        maxLength={15}
        onChangeText={(text) => setUser({ ...user, username: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        maxLength={25}
        onChangeText={(text) => setUser({ ...user, password: text })}
      />
      <Button title="Register" onPress={() => registerUser(user)} />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 765,
    backgroundColor: GlobalStyles.colors.primary50,
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
