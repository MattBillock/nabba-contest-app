import * as React from 'react';
import { SafeAreaView, ScrollView } from "react-native";

import { useSelector } from 'react-redux';
import {  selectDefaultVenue, selectPerformancesByStage, selectVenueList } from '../features/contestData/contestDataSlice';
import { StageButtons } from './StageButtons';
import { StageCalendar } from './StageCalendar';



export function MyCalendar(props) {
  const performanceSchedule = useSelector(selectPerformancesByStage);
  const venue = useSelector(selectDefaultVenue);
  const venueList = useSelector(selectVenueList);

  let calendar_content_array = {}
  venueList.forEach(venue => {
    calendar_content_array[venue] = <StageCalendar performanceSchedule={performanceSchedule[venue]} />
  })
  return (
    <SafeAreaView style={{flex:1}}>
      <StageButtons />
      {calendar_content_array[venue]}
    </SafeAreaView>
  );
};
