import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Touchable from './Touchable';

function ListItem({title, mag, date, ...props}) {
  const listItem = useMemo(
    () => (
      <Touchable {...props}>
        <View style={styles.container}>
          <Icon name="clipboard-pulse" size={30} color={Colors.success} />
          <View style={styles.textView}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subtitleText}>
              Şiddet:
              <Text style={styles.detailText}>{mag}</Text>
            </Text>
            <Text style={styles.subtitleText}>
              Tarih:
              <Text style={styles.detailText}>{date}</Text>
            </Text>
          </View>
        </View>
      </Touchable>
    ),
    [title, mag, date],
  );
  return listItem;
}


export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 7.5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  textView: {
    flex: 1,
    marginLeft: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitleText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 2,
  },
  detailText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: Colors.primary,
  },
});
