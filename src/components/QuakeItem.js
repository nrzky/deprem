import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import Touchable from './Touchable';

function QuakeItem(props) {
  return (
    <Touchable {...props}>
      <View style={styles.container}>
        <Icon name={props.name} size={30} color={Colors.success} />
        <View style={styles.textView}>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.detailText}>{props.detail}</Text>
        </View>
      </View>
    </Touchable >
  );
}

QuakeItem.defaultProps = {
  title: 'Deprem Başlığı',
  subtitle: 'Deprem Açıklaması',
}

export default QuakeItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 10,
    height: Dimensions.get('window').width / 2 - 40,
    width: Dimensions.get('window').width / 2 - 40,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 7.5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  textView: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  detailText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 10,
  }
});
