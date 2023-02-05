import * as React from 'react';
import { useEffect } from 'react';
import { SafeAreaView, ScrollView } from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { selectActivePage, changePage } from '../features/appData/appDataSlice';
import {  selectDefaultVenue, selectPerformancesByStage, selectVenueList } from '../features/contestData/contestDataSlice';
import { StageButtons } from './StageButtons';
import { StageCalendar } from './StageCalendar';



export function MyCalendar(props) {
  const performanceSchedule = useSelector(selectPerformancesByStage);
  const venue = useSelector(selectDefaultVenue);
  const venueList = useSelector(selectVenueList);

  let calendar_content_array = {}
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("Schedule"));
  }, [dispatch])
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
