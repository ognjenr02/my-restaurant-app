import { StyleSheet, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapView} showsUserLocation followsUserLocation>
        <Marker
          title="Tocionica"
          description="Duff beer for me, Duff beer for you"
          coordinate={{
            latitude: 45.24253997441436,
            longitude: 19.84693327451013,
          }}
        />
        <Marker
          title="McDonald's Promenada Novi Sad"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.245138964970266,
            longitude: 19.8436580756081,
          }}
        />
        <Marker
          title="Konoba Riba Ribi Grize Rep"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.24806444051747,
            longitude: 19.84867701070659,
          }}
        />
        <Marker
          title="Paskal"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.245138964970266,
            longitude: 19.8436580756081,
          }}
        />
        <Marker
          title="Cepelin"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.25067781000486,
            longitude: 19.85671898160771,
          }}
        />
        <Marker
          title="Brocolli.rs"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.2496566852545,
            longitude: 19.851695412505507,
          }}
        />
        <Marker
          title="McDonald's Promenada Novi Sad"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.245138964970266,
            longitude: 19.8436580756081,
          }}
        />
        <Marker
          title="Cubo Concept Bar & Restaurant"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.23946748059569,
            longitude: 19.85114239534384,
          }}
        />
        <Marker
          title="Bezza Caffe & restoran"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.237911651375654,
            longitude: 19.847905789172806,
          }}
        />
        <Marker
          title="Čarda Jedro"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.235581627587045,
            longitude: 19.84171999276752,
          }}
        />
        <Marker
          title="Kafana Tako Je Suđeno"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.23228836683986,
            longitude: 19.857459448137593,
          }}
        />
        <Marker
          title="Čarda Aqua Doria"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.25445132037532,
            longitude: 19.859443825034305,
          }}
        />
        <Marker
          title="Taverna Sat"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.253446492114065,
            longitude: 19.85603492031027,
          }}
        />
        <Marker
          title="Kafana Tako Je Suđeno"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 45.23228836683986,
            longitude: 19.857459448137593,
          }}
        />
      </MapView>
    </View>
  );
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
