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
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary100,
            borderColor: '#000',
          },
          tabBarLabel: 'Home',
          tabBarLabelStyle: { color: GlobalStyles.colors.error500 },
          tabBarActiveBackgroundColor: GlobalStyles.colors.primary50,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={GlobalStyles.colors.error500}
            />
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
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary100,
            borderColor: '#000',
          },
          tabBarLabel: 'Maps',
          tabBarLabelStyle: { color: GlobalStyles.colors.error500 },
          tabBarActiveBackgroundColor: GlobalStyles.colors.primary50,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="pin-outline"
              size={size}
              color={GlobalStyles.colors.error500}
            />
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
          headerStyle: { backgroundColor: GlobalStyles.colors.primary100 },
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
        options={{
          title: 'Reviews',
          headerStyle: { backgroundColor: GlobalStyles.colors.primary100 },
          headerRight: () => <LogoutButton />,
        }}
      />
      <Stack.Screen
        name="AddReview"
        component={AddReviewScreen}
        options={{
          title: 'Add New Review',
          headerStyle: { backgroundColor: GlobalStyles.colors.primary100 },
          headerRight: () => <LogoutButton />,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
