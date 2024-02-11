import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import { GlobalStyles } from '../constants';
import { useSelector } from 'react-redux';

const Review = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = useSelector((state: any) => state.users);
  console.log(token);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://192.168.1.5:8080/getReviews', {
          headers: {
            Authorization: `Bearer ${token}`, // send the token in the headers
          },
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, []);

  if (isLoading) {
    return (
      <ActivityIndicator size="large" color={GlobalStyles.colors.primary400} />
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item: any, index) => index.toString()}
      renderItem={({ item }) => (
        <Pressable>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{item.Title}</Text>
            </View>
            <Text>Restoran: {item.RestaurantName}</Text>
            <Text>Lokacija: {item.RestaurantLocation}</Text>
            <Text>{item.Comment.split(' ').slice(0, 10).join(' ')}...</Text>
            <Text>{item.Rating} / 10</Text>
            <Text>{item.UserID}</Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: `data:image/jpeg;base64,${Buffer.from(
                    item.Picture.data
                  ).toString('base64')}`,
                }}
              />
            </View>
          </View>
        </Pressable>
      )}
    />
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: GlobalStyles.colors.primary100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20,
    borderRadius: 10,
    elevation: 10,
  },
  header: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 280,
    height: 220,
    borderRadius: 20,
  },
});
