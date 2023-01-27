import * as React from 'react';
import { useState } from "react";
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectContestById } from '../features/contestList/contestListSlice';
import { selectSelectedContestId } from '../features/selectedContestId/selectedContestIdSlice';
import Constants from 'expo-constants';
import Navbar from './Navbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%', 
    height:'100%', 
    flex: 1,
    resizeMode: 'cover'
  },
});

export default function ContestContainer(props) {
  
  const selectedContestId = useSelector(selectSelectedContestId);
  const contestData = useSelector(state => {
    return state.contestList.contestList.find(contest => contest.id === selectedContestId)
  });
  return (
    <View>
        <ImageBackground source={require('../assets/background.jpg')} style={styles.image}>
          <Navbar contestData={contestData} />
        </ImageBackground>
    </View>
      
  );
}