import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ReviewsList from '../components/reviews/ReviewsList';

const ReviewScreen = (route: any) => {
  const { reviewId } = route.params;

  return (
    <View>
      <ReviewsList />
      <Text>ReviewScreen</Text>
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({});
