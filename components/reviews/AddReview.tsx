import { StyleSheet, View, TextInput, Button, Image } from 'react-native';
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
  const [picture, setPicture] = useState('');
  // const [pictureName, setPictureName] = useState(null);

  const token = useSelector((state: any) => state.users);
  // console.log(token.token);

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
        'http://192.168.1.5:8080/addReview',
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
