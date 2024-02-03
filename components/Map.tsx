import { StyleSheet, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  return <View style={styles.container}></View>;
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapView: {
    alignSelf: 'stretch',
    minHeight: 550,
    height: '100%',
    minWidth: 450,
    width: '100%',
  },

  ipaText: {
    color: 'coral',
  },

  stoutText: {
    color: 'firebrick',
  },

  boldText: {
    fontWeight: 'bold',
  },
  image: {
    width: 20,
    height: 20,
  },
});
