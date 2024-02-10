import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

interface User {
  FirstName: string;
  LastName: string;
  Email: string;
  Username: string;
  Password: string;
}

const Registration = () => {
  const [user, setUser] = useState<User>({
    FirstName: '',
    LastName: '',
    Email: '',
    Username: '',
    Password: '',
  });

  const registerUser = async (user: User): Promise<any> => {
    try {
      const response = await axios.post(
        'http://192.168.0.36:8080/registerUsers',
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
        onChangeText={(text) => setUser({ ...user, FirstName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        maxLength={25}
        onChangeText={(text) => setUser({ ...user, LastName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setUser({ ...user, Email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        maxLength={15}
        onChangeText={(text) => setUser({ ...user, Username: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        maxLength={25}
        onChangeText={(text) => setUser({ ...user, Password: text })}
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
