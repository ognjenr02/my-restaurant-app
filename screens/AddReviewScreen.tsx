import { StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';
import AddReview from '../components/reviews/AddReview';

const windowWidth = Dimensions.get('window').width;
const isTablet = windowWidth >= 768;

const AddReviewScreen = () => {
  return (
    <View style={isTablet ? styles.containerTablet : styles.container}>
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
