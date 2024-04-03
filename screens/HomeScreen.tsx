import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { GlobalStyles } from '../constants';
import ReviewsList from '../components/reviews/ReviewsList';

const window = Dimensions.get('window');
const isTablet = window.width >= 768;

const HomeScreen = () => {
  return (
    <View style={isTablet ? styles.containerTablet : styles.container}>
      <ReviewsList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary200,
  },
  containerTablet: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary200,
    padding: 20,
  },
});
