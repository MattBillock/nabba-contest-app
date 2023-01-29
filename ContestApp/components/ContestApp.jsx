
import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux'

import { Card, Title, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import ContestContainer from './ContestContainer.jsx';
import ContestSelector from './ContestSelector.jsx';
import { newContestList, selectContestList, fetchList, selectContestListStatus, selectContestById } from '../features/contestList/contestListSlice.js';
import { selectSelectedContestId } from '../features/selectedContestId/selectedContestIdSlice.js';
import { selectContestListLoaded, setContestListLoaded } from '../features/contestList/contestListLoadedSlice.js';



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


export default function ContestApp() {

    const _handleUser = () => console.log('manage');
    //const [selectedContestId, setSelectedContestId] = useState(-1);
    const [selectedContestData, setSelectedContestData] = useState();
    const loaded = useSelector(selectContestListLoaded);
    const selectedContestId = useSelector(selectSelectedContestId);

    const dispatch = useDispatch();


    return (
      <NavigationContainer>
        <PaperProvider>
          <ImageBackground source={require('../assets/background.jpg')} style={styles.image}>
              {selectedContestId < 0 && <ContestSelector />}
              {selectedContestId >= 0 && <ContestContainer />}
          </ImageBackground>
        </PaperProvider>
      </NavigationContainer>
    )
    
}

