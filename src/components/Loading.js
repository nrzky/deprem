import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

function Loading(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={Colors.primary}
      />
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.subtitleText}>{props.subtitle}</Text>
    </View>
  );
}

Loading.defaultProps = {
  title: 'Yükleniyor',
  subtitle: 'Veriler yükleniyor. Lütfen bekleyiniz.',
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    color: Colors.primary,
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  subtitleText: {
    fontSize: 14,
    color: Colors.primary,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});