import * as React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Constants from 'expo-constants';
import { Agenda } from 'react-native-calendars';

import { Card, Paragraph, SegmentedButtons } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { newDefaultStage, selectBandList, selectDefaultVenue, selectPerformanceSchedule, selectVenueList } from '../features/contestData/contestDataSlice';
import { useState } from 'react';


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


//const apiCalendar = new ApiCalendar(config);


export function StageButtons(props) {

  const venueList = useSelector(selectVenueList);

  const dispatch = useDispatch();

  const value = useSelector(selectDefaultVenue);

  function getVenueButtons() {
    let result_array = [];
    venueList.forEach(venue => {
      result_array.push({
        value: venue,
        label: venue,
      })
    })
    return result_array;
  }

  function setValue (newValue) {
    dispatch(newDefaultStage(newValue));
  }

  //apiCalendar.listUpcomingEvents(100).then(({result}:any) => {
  //  setContestEvents(result)
  //})
  return (
      <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={getVenueButtons()}
        />
  
  );
};
