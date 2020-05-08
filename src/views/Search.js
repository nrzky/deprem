import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.titleText}>Deprem</Text>
        <Text style={styles.subtitleText}>Arama Yap</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.contentView}>

      </View>
    </View>
  );
}

export default Search;

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
  textInput: {
    backgroundColor: Colors.white,
    padding: 20,
    position: 'absolute',
    width: 300,
    bottom: -30,
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  contentView: {
    flex: 1,
    backgroundColor: Colors.white,
    zIndex: -1
  }
});