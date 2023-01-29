import * as React from 'react';
import { StyleSheet, Text, Button, View, FlatList, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { BandCard } from './BandCard';
import { Card, Paragraph, Title, List } from 'react-native-paper';
import Constants from 'expo-constants';
import { useSelector } from 'react-redux';
import { selectBandList, selectPerformanceSchedule } from '../features/contestData/contestDataSlice';

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

function useAsync(asyncFn, onSuccess) {
  React.useEffect(() => {
    let isActive=true;
    asyncFn().then(data => {
      if(isActive) onSuccess(data);
    });
    return () => {isActive = false};
  }, [asyncFn, onSuccess])
}


export function ContestDashboard(props) {
  const bandList = useSelector(selectBandList);

  let content
  content = bandList.map((schedule) => {
    return (<BandCard item={schedule} />)
  })
  
  return (
    <View>
      {content}
    </View>
  )
}