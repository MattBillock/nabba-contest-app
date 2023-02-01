import * as React from 'react';
import { ScrollView } from "react-native";

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
    <ScrollView>
      <StageButtons />
      {calendar_content_array[venue]}
    </ScrollView>
  );
};
