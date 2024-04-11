import { StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';
import AddReview from '../components/reviews/AddReview';

const AddReviewScreen = () => {
  return (
    <View style={styles.container}>
      <AddReview />
    </View>
  );
};

export default AddReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTablet: {
    flex: 1,
    paddingHorizontal: 50,
  },
});
