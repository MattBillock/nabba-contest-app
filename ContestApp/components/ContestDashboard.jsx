import * as React from 'react';
import { Text, Button, View, FlatList } from "react-native";
import { useState } from "react";

import NabbaData from '../assets/contest_schedules/nabba2023.json'
import { BandCard } from './BandCard';
import { Card, Paragraph, Title, List } from 'react-native-paper';


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
      console.log(NabbaData.band_list)
      setScheduleJson(NabbaData.band_list)
    }
  })
  
  return (
    <View>
      { loading && (
        <Card>
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