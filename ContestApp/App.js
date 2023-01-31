import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { Provider} from 'react-redux'
// import { DefaultTheme} from 'react-native-paper';

import store from './app/store'
import ContestApp from './components/ContestApp.jsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default function App() {
  // if contest list is loaded, next we need to get the selection from the user. Once we get selection from user, we need to get the contest data files. So I think we need a nest here, branch like: 1 - loading screen, 2 - contest selector, 3 - contest container, move existing nav bar in there. Move loading of contest data into contest container, since we provide filename in contest json, so first step of container is to fetch data from the server to render the contest
  // We also need to store this selection locally, if there are multiple active contests, or during active contests. Don't want someone to have to pick a concert every time. We might be able to get away with this with some clever timing depending.
  return (
  <Provider store={store}>
    <ContestApp />
  </Provider>
  ); 
}
