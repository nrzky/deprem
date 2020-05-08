import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { ListItem, IconButton } from '../components';

function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.titleText}>Deprem</Text>
        <Text style={styles.subtitleText}>Arama Yap</Text>
        <View style={styles.inputView}>
          <TextInput style={styles.textInput} />
          <IconButton
            name="magnify"
            color={Colors.primary}
          />
        </View>
      </View>
      <View style={styles.contentView}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={() => <ListItem />}
        />
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
  inputView: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  textInput: {
    width: '90%',
  },
  contentView: {
    flex: 1,
    backgroundColor: Colors.white,
    zIndex: -1,
    paddingTop: 40,
  }
});