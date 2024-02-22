import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { GlobalStyles } from '../../constants';

const AddReview = () => {
  const [title, setTitle] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantLocation, setRestaurantLocation] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState(null);

  const token = useSelector((state: any) => state.users);
  console.log(token);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  async function addReview() {
    // Create a new FormData object
    const formData: any = new FormData();
    console.log('11111111111111111111111111111111111111111111111');

    // Append the review data to the FormData object
    formData.append('title', title);
    formData.append('restaurantName', restaurantName);
    formData.append('restaurantLocation', restaurantLocation);
    formData.append('comment', comment);
    formData.append('rating', rating);

    formData.append('picture', {
      uri: image, // replace with your image URI
      type: 'image/jpeg', // replace with your image type
      name: 'review-image.jpg', // replace with your image name
    });
    console.log('11111111111111111111111111111111111111111111112');
    // console.log(formData);
    console.log(image);

    try {
      console.log('11111111111111111111111111111111111111111111113');
      const response = await axios.post(
        'http://192.168.1.5:8080/addReview',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      // Handle the response here (e.g., show a success message or redirect to a different page)
      console.log(response.data);
      console.log('11111111111111111111111111111111111111111111114');
    } catch (error) {
      // Handle the error here (e.g., show an error message)
      console.log(error);
      console.log('00000000000000000000000000000000000000000000000');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setRestaurantName}
        placeholder="Restaurant Name"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setRestaurantLocation}
        placeholder="Restaurant Location"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setComment}
        placeholder="Comment"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setRating}
        placeholder="Rating"
        keyboardType="numeric"
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Submit Review" onPress={addReview} />
    </View>
  );
};

export default AddReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary200,
  },
  textInput: {
    marginVertical: 20,
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: GlobalStyles.colors.gray700,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});
