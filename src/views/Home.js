import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import Axios from 'axios';
import Colors from '../constants/Colors';
import { ListItem, IconButton, Loading } from '../components';

function Search({ navigation }) {
  const [searchResult, setResult] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async (callback) => {
    setLoading(true);
    await Axios.get('https://api.orhanaydogdu.com.tr/deprem/live.php?limit=100')
      .then(res => {
        setResult(res.data.result);

        if (typeof callback === 'function') {
          callback(res.data.result);
        }
      })
      .catch(err => alert(err))
      .finally(() => setLoading(false));
  }

  searchData = async () => {
    await fetchData(response => {
      let result = [];
      const text = keyword.toUpperCase();
      if (text != '') {
        response.map(element => {
          if (element.title.includes(text)) {
            result.push(element);
          }
        })
      } else {
        result = response;
      }
      setResult(result);
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.titleText}>Deprem</Text>
        <Text style={styles.subtitleText}>Kandilli Rasathanesinden Anlık Veriler</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            value={keyword}
            onChangeText={value => setKeyword(value)}
            placeholder="Bölge Giriniz"
          />
          <IconButton
            onPress={searchData}
            name="magnify"
            color={Colors.primary}
          />
        </View>
      </View>
      <View style={styles.contentView}>
        {
          loading ? <Loading
            title="Depremler Yükleniyor"
            subtitle="Deprem verileri yükleniyor. Lütfen bekleyiniz."
          /> :
            <FlatList
              data={searchResult}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <ListItem
                onPress={() => navigation.navigate('QuakeDetail', { item: item })}
                title={item.title}
                mag={item.mag}
                date={item.date}
              />}
            />
        }
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
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  textInput: {
    width: '90%',
    color: Colors.primary,
  },
  contentView: {
    flex: 1,
    backgroundColor: Colors.white,
    zIndex: -1,
    paddingTop: 40,
  }
});