import * as React from 'react';
import { Dimensions, SectionList, StyleSheet, TouchableOpacity, View } from "react-native";
import Constants from 'expo-constants';
import { Agenda } from 'react-native-calendars';

import { Card, Paragraph, SegmentedButtons, Text, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { newDefaultStage, selectBandList, selectContestDates, selectDefaultVenue, selectPerformancesByStage, selectPerformanceSchedule, selectPerformancesForStage, selectVenueList } from '../features/contestData/contestDataSlice';
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


export function StageCalendar(props) {

  const theme=useTheme();

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
      height:40
    },
    sectionHeader: {
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0A0A0A'
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  
  const bandList = useSelector(selectBandList);

  const contestDates = useSelector(selectContestDates);
  const performanceSchedule = useSelector(selectPerformancesByStage);
  const venue = useSelector(selectDefaultVenue);
  
  function getBandDetailsById(id) {
    let retval = {name:'not found'};
    bandList.forEach (band => {
      if(band.id == id) {
        retval = band;
      }
    });
    return retval;
  }

  function getBandName(band_name, slot_name) {
    const section_map = {
      'C': 'Championship',
      '1': 'First',
      '2': 'Second',
      '3': 'Third',
      'YO': 'Youth Open',
      'Y1': 'Youth First',
      'YC': 'Youth Championship'
    }
    const contest_date = new Date(contestDates[0])
    if(contest_date <= Date.now()) {
      return band_name
    }
    else{
      let split_arr = slot_name.split('_');
      let constructed_band_name = section_map[split_arr[0]] + " section band " + split_arr[1]
      return constructed_band_name;
    }
  }

  function getAgenda(itemList) {
    return (
      <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={performanceSchedule[venue]}
        // Initially selected day
        selected={'2023-04-21'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2023-04-21'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2023-04-22'}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={0}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={0}
        rowHasChanged={(r1, r2) => {
          return r1.band_draw !== r2.band_draw;
        }}
        // Specify how each item should be rendered in agenda
        

      />
    );
  }
  let content = getAgenda(props.performanceSchedule);
  //apiCalendar.listUpcomingEvents(100).then(({result}:any) => {
  //  setContestEvents(result)
  //})

  function buildListFormat() {
    let result_array = []
    let schedule = performanceSchedule[venue];
    contestDates.forEach(date => {
      let objectForDate = {
        title: date,
        data: schedule[date],
      }
      result_array.push(objectForDate)
    })
    return result_array;
  }
  return (
    <View>
      <SectionList
        sections={buildListFormat()} 
        renderItem={(item) => {
          let band = getBandDetailsById(item.item.band_id);
          let band_name = getBandName(band.name, item.item.band_draw)
          const options = { hour: "numeric", minute: "2-digit" };
          let start_time = new Date(item.item.performance_times.start_timestamp)
          return (
            <TouchableOpacity>
              <Card elevated style={styles.card}>
                <Card.Title title={start_time.toLocaleTimeString([], options) + " - " + band_name} titleNumberOfLines={1} />
                
              </Card>
              
            </TouchableOpacity>);  
        }} 
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item.band_draw}`} 
        />
    </View>
  );
};
