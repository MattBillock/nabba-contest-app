
import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { StyleSheet, Text, View} from 'react-native';
import { Provider, useDispatch } from 'react-redux'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import store from './app/store'
import ContestApp from './components/ContestApp.jsx';
const theme = {
  ...DefaultTheme,
  colors: {
    "primary": "rgb(52, 61, 255)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(224, 224, 255)",
    "onPrimaryContainer": "rgb(0, 0, 110)",
    "secondary": "rgb(92, 93, 114)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(225, 224, 249)",
    "onSecondaryContainer": "rgb(25, 26, 44)",
    "tertiary": "rgb(120, 83, 107)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(255, 216, 238)",
    "onTertiaryContainer": "rgb(46, 17, 38)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(27, 27, 31)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(27, 27, 31)",
    "surfaceVariant": "rgb(228, 225, 236)",
    "onSurfaceVariant": "rgb(70, 70, 79)",
    "outline": "rgb(119, 118, 128)",
    "outlineVariant": "rgb(199, 197, 208)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(48, 48, 52)",
    "inverseOnSurface": "rgb(243, 239, 244)",
    "inversePrimary": "rgb(190, 194, 255)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(245, 242, 255)",
      "level2": "rgb(239, 236, 255)",
      "level3": "rgb(233, 230, 255)",
      "level4": "rgb(231, 228, 255)",
      "level5": "rgb(227, 224, 255)"
    },
    "surfaceDisabled": "rgba(27, 27, 31, 0.12)",
    "onSurfaceDisabled": "rgba(27, 27, 31, 0.38)",
    "backdrop": "rgba(48, 48, 56, 0.4)"
  },
}

const styles = StyleSheet.create({
  
  image: {
    width:'100%', 
    height:'100%', 
    flex: 1,
    resizeMode: 'cover'
  }
});


export default function App() {

    const _handleUser = () => console.log('manage');
    const [loaded, setLoaded] = useState(false);
    
    
        // if contest list is loaded, next we need to get the selection from the user. Once we get selection from user, we need to get the contest data files. So I think we need a nest here, branch like: 1 - loading screen, 2 - contest selector, 3 - contest container, move existing nav bar in there. Move loading of contest data into contest container, since we provide filename in contest json, so first step of container is to fetch data from the server to render the contest

        // We also need to store this selection locally, if there are multiple active contests, or during active contests. Don't want someone to have to pick a concert every time. We might be able to get away with this with some clever timing depending.

    
    return (
      <Provider store={store}>
        <ContestApp />
      </Provider>
    ); 
}

