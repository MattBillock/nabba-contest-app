import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

import React, { Component } from 'react';
import { Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {MyCalendar} from './components/Calendar.jsx'
import { ContestDashboard } from './components/ContestDashboard.jsx';

const theme = {

  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'red',
  },
}

export default function App() {
  /*return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <WebView originWhitelist={['*']} source={{uri: 'https://nabba.org'}} style={{ marginTop: 20}} />
      <StatusBar style="auto" />
    </View>
  );
  */

    const _handleUser = () => console.log('manage');
    return(
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <PaperProvider theme={theme}>
            <Appbar.Header>
              <Appbar.Content title="Brass Band Contest App" />
              <Appbar.Action icon="account" onPress={_handleUser} />
            </Appbar.Header>
            <ContestDashboard />
        </PaperProvider>
      </View>
    ); /*Platform.OS === "web" ? (
      <iframe src="https://nabba.org/" height={'100%'} width={'100%'} />
    ) :*/ 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
