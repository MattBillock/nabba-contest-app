import * as React from 'react';
import { StyleSheet, Text, Button, View, FlatList, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";

import NabbaData from '../assets/contest_schedules/nabba2023.json'
import { BandCard } from './BandCard';
import { Card, Paragraph, Title, List } from 'react-native-paper';
import Constants from 'expo-constants';

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
  const [scheduleJson, setScheduleJson] = useState(undefined);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if(loading) {
      setLoading(false);
      setScheduleJson(NabbaData.band_list)
    }
  })
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.jpg')} style={styles.image}>
      
      { loading && (
          <Card elevated>
            <Card.Content>
              <Title>Loading Data</Title>
              <Paragraph>Loading...</Paragraph>
            </Card.Content>
          </Card>
        )
      }
      { scheduleJson && (
          /*<Card.Content>
            <Title>Loading Data</Title>
            <Paragraph>{scheduleJson}</Paragraph>
          </Card.Content>*/
            <FlatList data={scheduleJson} renderItem={(item) => <BandCard item={item} />} keyExtractor={(item) => item.id.toString()} />
          
      )}
    </ImageBackground>
    </View>
  )
}