import * as React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import { Agenda } from 'react-native-calendars';

import { Card, Paragraph } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { selectBandList, selectPerformanceSchedule } from '../features/contestData/contestDataSlice';


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


  const bandList = useSelector(selectBandList);

  const performanceSchedule = useSelector(selectPerformanceSchedule);
  console.log(performanceSchedule);
  // function handleAuthClick() {
  //   setAuthButtonText("Clicked");
  //     fetch('https://www.googleapis.com/userinfo/v2/me', {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     }).then((userResult) => {
  //       setUserInfoResponse(userResult) 
  //     });
  //     setContentValue(userInfoResponse);
  // }
  function getBandDetailsById(id) {
    let retval = {name:'not found'};
    bandList.forEach (band => {
      console.log(band.name)
      if(band.id == id) {
        retval = band;
      }
    });
    return retval;
  }

  //apiCalendar.listUpcomingEvents(100).then(({result}:any) => {
  //  setContestEvents(result)
  //})
  return (
      <Agenda
  // The list of items that have to be displayed in agenda. If you want to render item as empty date
  // the value of date key has to be an empty array []. If there exists no value for date key it is
  // considered that the date in question is not yet loaded
  items={  performanceSchedule }
  // Callback that gets called when items for a certain month should be loaded (month became visible)
  /*loadItemsForMonth={month => {
    console.log('trigger items loading');
  }}
  // Callback that fires when the calendar is opened or closed
  onCalendarToggled={calendarOpened => {
    console.log(calendarOpened);
  }}
  // Callback that gets called on day press
  onDayPress={day => {
    console.log('day pressed');
  }}
  // Callback that gets called when day changes while scrolling agenda list
  onDayChange={day => {
    console.log('day changed');
  }}*/
  // Initially selected day
  selected={'2023-04-21'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2023-04-21'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2023-04-22'}
  // Max amount of months allowed to scroll to the past. Default = 50
  pastScrollRange={1}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={1}
  // Specify how each item should be rendered in agenda
  renderItem={(item, firstItemInDay) => {
    let band = getBandDetailsById(item.band_id);
    const options = { hour: "numeric", minute: "2-digit" };
    let start_time = new Date(item.performance_times.start_timestamp)
    console.log(band);
    return (
      <TouchableOpacity>
        <Card elevated style={styles.card}>
          <Card.Title title={band.name} subtitle={start_time.toLocaleTimeString([], options)} titleNumberOfLines={1} />
          
        </Card>
      </TouchableOpacity>);
  }}
  // Specify what should be rendered instead of ActivityIndicator
  /*renderEmptyData={() => {
    return <View />;
  }}*/
  // Hide knob button. Default = false
  hideKnob={true}
  // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
  showClosingKnob={false}

/>

  );
};
