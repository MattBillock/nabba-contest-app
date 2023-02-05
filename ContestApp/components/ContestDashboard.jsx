import * as React from 'react';
import { ScrollView } from "react-native";
import { BandCard } from './BandCard';
import { useSelector } from 'react-redux';
import { selectBandList } from '../features/contestData/contestDataSlice';


export function ContestDashboard() {
  const bandList = useSelector(selectBandList);

  let content;
  content = bandList.map((schedule) => {
    return (<BandCard key={schedule.id} item={schedule} />)
  })
  
  return (
    <ScrollView style={{flex:1}}>
      {content}
    </ScrollView>
  )
}