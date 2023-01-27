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
  const [contestFile, setContestFile] = useState(props.contest_data_file);

  React.useEffect(() => {
    if(loading) {
      setLoading(false);
      fetch(contestFile).then(function(response) {
        return response.json;
      })
      .then(function(responseJson){
        setScheduleJson(responseJson.band_list);
      })
    }
  })
  
  return (
    <View>
      
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
    </View>
  )
}