import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Constants from 'expo-constants';
import { Agenda } from 'react-native-calendars';

import { Card, Paragraph, SegmentedButtons } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { newDefaultStage, selectBandList, selectDefaultVenue, selectPerformancesByStage, selectPerformanceSchedule, selectPerformancesForStage, selectVenueList } from '../features/contestData/contestDataSlice';
import { useState } from 'react';
import { StageButtons } from './StageButtons';
import { StageCalendar } from './StageCalendar';


const expoConfig = {
 }

// const config = {
//   "clientId": GOOGLE_CLIENT_ID,
//   "apiKey":GOOGLE_API_KEY,
//   "scope":"https://www.googleapis.com/auth/calendar",
//   "discoveryDocs": [
//     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
//   ]
// }

const CALENDAR_ID = 'c_fd136e6992fe258c3f9cb3e54320aa2c0116f5ebc4c857baffbcbe5c8ea09b2b@group.calendar.google.com';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  
  image: {
    width:'100%', 
    height:'100%', 
    flex: 1,
    resizeMode: 'cover'
  },
  card: {
    backgroundColor: '#0A0A0A',
    color: 'white',
    opacity: .5,
    borderWidth: 1,
    marginVertical:1,
    borderRadius: 5,
  }
});

//const apiCalendar = new ApiCalendar(config);


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
