import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Axios from 'axios';
import Colors from '../constants/Colors';
import { IconButton } from '../components';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

function MapDetail({ route, navigation }) {
  const [mapResult, setResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async (callback) => {
    await Axios.get('https://api.orhanaydogdu.com.tr/deprem/live.php?limit=100')
      .then(res => {
        setResult(res.data.result);

        if (typeof callback === 'function') {
          callback(res.data.result);
        }
      })
      .catch(err => alert(err));
  }

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.titleText}>Deprem</Text>
        <Text style={styles.subtitleText}>Güncel Deprem Haritası</Text>
        <View style={[styles.buttonView]}>
          <IconButton
            onPress={fetchData}
            name="refresh"
            color={Colors.success}
            size={40}
          />
        </View>
      </View>
      <View style={styles.contentView}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 40,
            longitude: 36,
            latitudeDelta: 26,
            longitudeDelta: 26,
          }}
        >
          {
            mapResult.map((item, index) => {
              return (
                <Marker key={index}
                  onPress={() => navigation.navigate('QuakeDetail', { item: item })}
                  title={item.title}
                  description={`Deprem Şiddeti: ${item.mag}`}
                  coordinate={{
                    latitude: item.lat,
                    longitude: item.lng
                  }}
                >
                </Marker>
              );
            })
          }
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
  buttonView: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: 15,
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: -40,
    alignItems: 'center',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  contentView: {
    height: Dimensions.get('window').height - 250,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: -1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});