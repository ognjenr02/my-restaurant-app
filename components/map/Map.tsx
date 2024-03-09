import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import { GlobalStyles } from '../../constants';
//@ts-ignore
import { GOOGLE_MAPS_API_KEY } from '@env';

const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRestaurants = async (location: any) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude},${location.coords.longitude}&radius=1000&type=restaurant&key=${GOOGLE_MAPS_API_KEY}`
      );
      setRestaurants(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location: any = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Fetch restaurants after getting the location
      fetchRestaurants(location);
    })();
  }, []);

  if (isLoading) {
    return (
      <ActivityIndicator size="large" color={GlobalStyles.colors.primary400} />
    );
  }

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  } else if (location) {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapView} showsUserLocation followsUserLocation>
          {restaurants.map((restaurant: any, index) => (
            <Marker
              key={index}
              title={restaurant.name}
              description={restaurant.vicinity}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            />
          ))}
        </MapView>
      </View>
    );
  }

  return <Text>Waiting...</Text>;
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView: {
    flex: 1,
    width: '100%',
  },
});
