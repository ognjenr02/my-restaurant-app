import { StyleSheet, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../constants';
import ReviewsList from '../components/reviews/ReviewsList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
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
});
