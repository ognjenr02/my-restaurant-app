import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Buffer } from 'buffer';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { GlobalStyles } from '../constants';

// Define the types for your navigation parameters
export type RootStackParamList = {
  // ... other screen params
  ReviewScreen: { reviewId: any }; // Assuming reviewId is of type string
};

// Define the props for the ReviewScreen based on the navigation and route
//@ts-ignore
type ReviewScreenProps = NativeStackScreenProps<RootStackParamList, 'Reviews'>;

const ReviewScreen: React.FC<ReviewScreenProps> = ({ route, navigation }) => {
  //@ts-ignore
  const { reviewId } = route.params;

  const [review, setReview]: any = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const token = useSelector((state: any) => state.users);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.5:8080/getReviewById/${reviewId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // send the token in the headers
            },
          }
        );
        setReview(response.data[0]);
        // console.log(response.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviewData();
  }, [reviewId]);

  if (isLoading) {
    return (
      <ActivityIndicator size="large" color={GlobalStyles.colors.primary400} />
    );
  }

  return (
    <View style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{review.Title}</Text>
      </View>
      <Text style={styles.text}>Restaurant: {review.RestaurantName}</Text>
      <Text style={styles.text}>Location: {review.RestaurantLocation}</Text>
      <Text style={styles.text}>Comment: {review.Comment}</Text>
      <Text style={styles.text}>Rating: {review.Rating} / 10</Text>
      <Text style={styles.text}>Username: {review.Username}</Text>
      {
        <Image
          source={{
            uri: `data:image/jpeg;base64,${Buffer.from(
              review.Picture.data
            ).toString('base64')}`,
          }}
          //source={{ uri: review.Picture }}
          style={styles.image}
        />
      }
      {/* Add more fields as needed */}
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary200,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderColor: GlobalStyles.colors.error50,
  },
  image: {
    width: '100%',
    height: 200,
    // marginBottom: 20,
    borderRadius: 20,
    marginVertical: 35,
  },
  titleContainer: {
    paddingVertical: 20,
    backgroundColor: GlobalStyles.colors.primary100,
    borderWidth: 2, // Set the border width
    borderColor: GlobalStyles.colors.error50, // Set the border color
    borderRadius: 10, // Set the border radius
  },
  title: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: GlobalStyles.colors.primary50,
    fontSize: 15,
    borderBottomWidth: 0.5, // Set the border width
    borderBottomColor: GlobalStyles.colors.error50, // Set the border color
    padding: 10,
  },
});
