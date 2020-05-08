import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Tab</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});