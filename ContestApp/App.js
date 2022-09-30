import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

import React, { Component } from 'react';

import {MyCalendar} from './components/Calendar.jsx'

export default function App() {
  /*return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <WebView originWhitelist={['*']} source={{uri: 'https://nabba.org'}} style={{ marginTop: 20}} />
      <StatusBar style="auto" />
    </View>
  );
  */
    return Platform.OS === "web" ? (
      <iframe src="https://nabba.org/" height={'100%'} width={'100%'} />
    ) : (
      <View style={styles.container}>
        <MyCalendar />

      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
