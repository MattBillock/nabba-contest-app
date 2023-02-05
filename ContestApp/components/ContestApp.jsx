
import React from 'react';
import { ImageBackground} from 'react-native';
import { useSelector } from 'react-redux'

import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import ContestContainer from './ContestContainer.jsx';
import ContestSelector from './ContestSelector.jsx';
import { selectSelectedContestId } from '../features/selectedContestId/selectedContestIdSlice.js';
import createStyle from '../app/styles.js';


/*
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
*/

const theme = {
  ...DefaultTheme,
  "colors": {
    "primary": "rgb(0, 104, 123)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(175, 236, 255)",
    "onPrimaryContainer": "rgb(0, 31, 39)",
    "secondary": "rgb(75, 98, 105)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(206, 231, 239)",
    "onSecondaryContainer": "rgb(6, 31, 37)",
    "tertiary": "rgb(87, 92, 126)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(222, 224, 255)",
    "onTertiaryContainer": "rgb(20, 25, 55)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(251, 252, 254)",
    "onBackground": "rgb(25, 28, 29)",
    "surface": "rgb(251, 252, 254)",
    "onSurface": "rgb(25, 28, 29)",
    "surfaceVariant": "rgb(219, 228, 231)",
    "onSurfaceVariant": "rgb(64, 72, 75)",
    "outline": "rgb(112, 120, 124)",
    "outlineVariant": "rgb(191, 200, 203)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(46, 49, 50)",
    "inverseOnSurface": "rgb(239, 241, 242)",
    "inversePrimary": "rgb(87, 214, 246)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(238, 245, 247)",
      "level2": "rgb(231, 240, 244)",
      "level3": "rgb(223, 236, 240)",
      "level4": "rgb(221, 234, 238)",
      "level5": "rgb(216, 231, 236)"
    },
    "surfaceDisabled": "rgba(25, 28, 29, 0.12)",
    "onSurfaceDisabled": "rgba(25, 28, 29, 0.38)",
    "backdrop": "rgba(41, 50, 53, 0.4)"
  }
};



export default function ContestApp() {

    const selectedContestId = useSelector(selectSelectedContestId);
    const styles = createStyle();

    return (
      <NavigationContainer>
        <PaperProvider theme={theme} style={styles.container}>
          <ImageBackground source={require('../assets/background.jpg')} style={styles.image}>
              {selectedContestId < 0 && <ContestSelector />}
              {selectedContestId >= 0 && <ContestContainer />}
          </ImageBackground>
        </PaperProvider>
      </NavigationContainer>
    )
    
}

