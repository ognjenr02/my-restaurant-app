import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddReviewButton = () => {
  const navigation: any = useNavigation();

  const handleAddReviewNavigation = () => {
    navigation.navigate('AddReview');
  };

  return (
    <Pressable onPress={handleAddReviewNavigation}>
      <Ionicons name="add" size={32} color="green" />
    </Pressable>
  );
};

export default AddReviewButton;

const styles = StyleSheet.create({});
