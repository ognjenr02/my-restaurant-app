import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MapsScreen from '../screens/MapsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import LogoutButton from '../components/buttons/LogoutButton';
import { GlobalStyles } from '../constants';
import ReviewScreen from '../screens/ReviewScreen';
import AddReviewScreen from '../screens/AddReviewScreen';
import AddReviewButton from '../components/buttons/AddReviewButton';

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
        options={{
          title: 'Login',
          headerStyle: { backgroundColor: GlobalStyles.colors.primary50 },
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegistrationScreen}
        options={{
          title: 'Register',
          headerStyle: { backgroundColor: GlobalStyles.colors.primary50 },
        }}
      />
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          title: '',
          headerRight: () => <AddReviewButton />,
          headerLeft: () => <LogoutButton />,
        }}
      />
      <Stack.Screen
        name="Maps"
        component={MyTabs}
        options={{ title: 'Maps', headerRight: () => <LogoutButton /> }}
      />
      <Stack.Screen
        name="Reviews"
        component={ReviewScreen}
        options={{ title: 'Reviews', headerRight: () => <LogoutButton /> }}
      />
      <Stack.Screen
        name="AddReview"
        component={AddReviewScreen}
        options={{
          title: 'Add New Review',
          headerRight: () => <LogoutButton />,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
