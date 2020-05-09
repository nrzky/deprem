import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from '../components';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

function MapDetail({ route, navigation }) {
  return (
    <View>
      <View style={styles.headerView}>
        <IconButton
          onPress={() => navigation.goBack()}
          name="arrow-left"
          style={{ position: 'absolute', zIndex: 200, top: 25, left: 10 }}
          color={Colors.white}
        />

        <Text style={styles.titleText}>Deprem Haritası</Text>
        <Text style={styles.subtitleText}>{route.params.item.title}</Text>
      </View>
      <View style={styles.contentView}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: route.params.item.lat,
            longitude: route.params.item.lng,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        >
          <Marker
          title={route.params.item.title}
          description={`Deprem Şiddeti: ${route.params.item.mag}`}
            coordinate={{
              latitude: route.params.item.lat,
              longitude: route.params.item.lng
            }}
          />
        </MapView>

      </View>
    </View>
  );
};

export default MapDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    backgroundColor: Colors.primary,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Colors.white,
  },
  subtitleText: {
    fontSize: 16,
    color: Colors.white,
  },
  contentView: {
    height: Dimensions.get('window').height - 250,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});