import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import Axios from 'axios';
import Colors from '../constants/Colors';
import { ListItem, IconButton, Touchable } from '../components';

function QuakeDetail({ route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <IconButton
          onPress={() => navigation.goBack()}
          name="arrow-left"
          style={{ position: 'absolute', top: 25, left: 10 }}
          color={Colors.white}
        />

        <Text style={styles.titleText}>Deprem</Text>
        <Text style={styles.subtitleText}>{route.params.item.title}</Text>
        <View style={[styles.inputView, { right: 50 }]}>
          <IconButton
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
      <View style={styles.contentView}>

      </View>
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
    flex: 1,
    backgroundColor: Colors.white,
    zIndex: -1,
    paddingTop: 40,
  }
});