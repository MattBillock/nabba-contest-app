import * as React from 'react';
import { Dimensions, SafeAreaView, ScrollView, SectionList, StyleSheet, TouchableOpacity, View } from "react-native";
import Constants from 'expo-constants';
import { Agenda } from 'react-native-calendars';

import { Card, Text, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { selectBandList, selectContestDates, selectDefaultVenue, selectPerformancesByStage, selectPerformanceSchedule, selectPerformancesForStage, selectVenueList } from '../features/contestData/contestDataSlice';


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
      backgroundColor: theme.colors.secondaryContainer,
      color: theme.colors.secondary,
      opacity: 1,
      borderWidth: 1,
      marginVertical:1,
      borderRadius: 5,
      height:48
    },
    sectionHeader: {
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: '20',
      fontWeight: 'bold',
      backgroundColor: theme.colors.onPrimaryContainer,
      color: theme.colors.onPrimary
    },
    item: {
      padding: 10,
      fontSize: '18',
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

  function getBandName(band_name, slot_name, title) {
    const section_map = {
      'C': 'Championship section',
      '1': 'First section',
      '2': 'Second section',
      '3': 'Third section',
      'YO': 'Youth Open section',
      'Y1': 'Youth First section',
      'YC': 'Youth Championship section',
      'O': 'Open section',
      'NT': 'Non-Traditional',
      'BC': 'Brass Choir',
      'EX': 'Exhibition',
      'B': 'DFoB participant',
    }
    const contest_date = new Date(contestDates[0])
    if(band_name != "not_found" && !slot_name.includes("session")) {
      if(contest_date > Date.now()) {
        let split_arr = slot_name.split('_');
        let constructed_band_name = section_map[split_arr[0]] + " band " + split_arr[1]
        return constructed_band_name;
      }
      else{
        return band_name
      }
    }
    else{
      return title;
    }
  }

  let moment = require('moment');
  //apiCalendar.listUpcomingEvents(100).then(({result}:any) => {
  //  setContestEvents(result)
  //})

  function buildListFormat() {
    let result_array = []
    let schedule = performanceSchedule[venue];
    contestDates.forEach(date => {
      let objectForDate = {
        title: moment(date).format("dddd, MMMM Do YYYY"),
        data: schedule[date],
      }
      if(objectForDate.data.length > 0) {
        result_array.push(objectForDate);
      }
    })
    return result_array;
  }
  return (
      <SectionList
        stickySectionHeadersEnabled={false}
        scrollEnabled={true}
        sections={buildListFormat()} 
        renderItem={(item) => {
          let band = getBandDetailsById(item.item.band_id);
          let band_name = getBandName(band.name, item.item.band_draw, item.item.title)
          const options = { hour: "numeric", minute: "2-digit" };
          let start_time = new Date(item.item.performance_times.start_timestamp)
          return (
            //<TouchableOpacity>
              <Card elevated style={styles.card}>
                <Card.Title title={moment(start_time).format('LT') + " - " + band_name} titleNumberOfLines={2} titleStyle={{overflow:'scroll'}} />
              </Card>
              
            //</TouchableOpacity>
            );  
        }} 
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}  variant="displayMedium">{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item.band_draw}`} 
        />
    
  );
};
