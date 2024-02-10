import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MapsScreen from '../screens/MapsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import LogoutButton from '../components/LogoutButton';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerRight: () => <LogoutButton />,
        }}
      />
      <Tab.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          headerShown: false,
          title: 'Maps',
          tabBarLabel: 'Maps',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pin-outline" size={size} color={color} />
          ),
          headerRight: () => <LogoutButton />,
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="Register"
        component={RegistrationScreen}
        options={{ title: 'Register' }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home', headerRight: () => <LogoutButton /> }}
      />
      <Stack.Screen
        name="Maps"
        component={MyTabs}
        options={{ title: 'Maps', headerRight: () => <LogoutButton /> }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
