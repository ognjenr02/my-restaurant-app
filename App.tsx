import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './routes/Navigation';
import { GlobalStyles } from './constants';
import { store } from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <>
        <StatusBar />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: GlobalStyles.colors.primary100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
