import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <View style={styles.header}></View>
      <View style={styles.content}></View>
      <View style={styles.footer}></View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#f9f9',
  },

  content: {
    // flex: 1,
    height: 510,
    backgroundColor: '#a7a7a7',
  },

  footer: {
    height: 50,
    backgroundColor: '#d9d9d9',
  },
});

export default App;
