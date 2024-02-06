import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://192.168.1.5:8080/getReviews');
        setData(response.data);
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item: any, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.Title}</Text>
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri: `data:image/jpeg;base64,${Buffer.from(
                item.Picture.data
              ).toString('base64')}`,
            }}
          />
        </View>
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
