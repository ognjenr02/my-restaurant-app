import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { GlobalStyles } from '../../constants';
//@ts-ignore
import { APP_HOST } from '@env';

const AddReview = () => {
  const [title, setTitle] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantLocation, setRestaurantLocation] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [picture, setPicture] = useState('');

  const token = useSelector((state: any) => state.users);

  // Function to handle the image picking from the camera
  const takePicture = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

    if (cameraPermission.status !== 'granted') {
      Alert.alert('Camera permission is required to take a picture.');
      return;
    }

    // Launch the camera with the following options
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
      exif: true,
    });

    if (!result.canceled) {
      setPicture(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the picture library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
      exif: true,
    });

    console.log(result.assets[0].uri);

    if (!result.canceled) {
      setPicture(result.assets[0].uri);
    }
  };

  async function addReview() {
    const formData: any = new FormData();

    const imageFile = {
      uri: picture,
      type: 'image/jpeg',
      name: 'review-picture.jpeg',
    };

    formData.append('title', title);
    console.log('Title: ' + title);
    formData.append('restaurantName', restaurantName);
    console.log('Restaurant Name: ' + restaurantName);
    formData.append('restaurantLocation', restaurantLocation);
    console.log('Restaurant Location: ' + restaurantLocation);
    formData.append('comment', comment);
    console.log('Comment: ' + comment);
    formData.append('rating', rating);
    console.log('Rating: ' + rating);
    formData.append('picture', imageFile);
    console.log('Picture: ' + imageFile);

    // console.log('imageFile: ', imageFile);
    console.log('Form Data:', formData);

    try {
      console.log('Sending request...');
      const response = await axios.post(
        `http://${APP_HOST}:8080/addReview`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Request successful. Response:', response.data);
    } catch (error) {
      console.log('Error:', error);
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
      <Button title="Pick an picture from camera roll" onPress={pickImage} />
      <Button title="Take a picture" onPress={takePicture} />
      {picture && (
        <Image source={{ uri: picture }} style={{ width: 200, height: 200 }} />
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
