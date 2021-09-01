import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A B C D E</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8c7ae6',
  },

  title: {
    fontSize: 80,
    color: '#29d19a',
  },
});

export default App;
