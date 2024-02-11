import React from 'react';
import { useDispatch } from 'react-redux';
import { removeToken } from '../redux/usersReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const handleLogout = async () => {
    dispatch(removeToken());
    const token = await AsyncStorage.removeItem('token');
    console.log(token);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <Pressable style={styles.button} onPress={handleLogout}>
      <Text style={styles.text}>Logout</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colors.primary200,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default LogoutButton;
