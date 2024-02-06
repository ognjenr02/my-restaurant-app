import { StyleSheet, View } from 'react-native';
import React from 'react';
import Review from '../components/Reviews';
import { GlobalStyles } from '../constants';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Review />
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
