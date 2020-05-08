import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItem(props) {
  return (
    <TouchableWithoutFeedback onPress={() => alert('test')}>
      <View style={styles.container}>
        <Icon name="clipboard-pulse" size={30} color={Colors.success} />
        <View style={styles.textView}>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.subtitleText}>{props.subtitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

ListItem.defaultProps = {
  title: 'Deprem Başlığı',
  subtitle: 'Deprem Açıklaması',
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textView: {
    marginLeft: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitleText: {
    fontSize: 12,
  }
});
