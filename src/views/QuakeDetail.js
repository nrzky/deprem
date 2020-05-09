import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { IconButton, QuakeItem } from '../components';

function QuakeDetail({ route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <IconButton
          onPress={() => navigation.goBack()}
          name="arrow-left"
          style={{ position: 'absolute', zIndex: 200, top: 25, left: 10 }}
          color={Colors.white}
        />

        <Text style={styles.titleText}>Deprem</Text>
        <Text style={styles.subtitleText}>{route.params.item.title}</Text>
        <View style={[styles.inputView, { right: 50 }]}>
          <IconButton
            onPress={() => navigation.navigate('MapDetail')}
            name="map-marker"
            color={Colors.success}
            size={40}
          />
        </View>
        <View style={[styles.inputView, { left: 50 }]}>
          <IconButton
            name="share-variant"
            color={Colors.success}
            size={40}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentView}>
        <QuakeItem
          name="map-marker"
          title="Deprem Konumu"
          detail={route.params.item.lokasyon}
        />
        <QuakeItem
          name="clipboard-pulse"
          title="Deprem Şiddeti"
          detail={route.params.item.mag}
        />
        <QuakeItem
          name="calendar"
          title="Deprem Zamanı"
          detail={route.params.item.date}
        />
        <QuakeItem
          name="tape-measure"
          title="Deprem Derinliği"
          detail={route.params.item.depth}
        />
        <QuakeItem
          name="arrow-split-vertical"
          title="Deprem Enlemi"
          detail={route.params.item.lat}
        />
        <QuakeItem
          name="arrow-split-horizontal"
          title="Deprem Boylamı"
          detail={route.params.item.lng}
        />
      </ScrollView>
    </View>
  );
}

export default QuakeDetail;

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
  inputView: {
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
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    zIndex: -1,
    paddingTop: 50,
  },
  scrollView: {
    zIndex: -1,
    backgroundColor: Colors.white
  },
});