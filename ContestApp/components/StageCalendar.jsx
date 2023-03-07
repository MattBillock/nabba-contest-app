import * as React from 'react';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, SectionList, StyleSheet, TouchableOpacity, View } from "react-native";
import Constants from 'expo-constants';
import { Agenda } from 'react-native-calendars';

import { Button, Card, DataTable, Divider, IconButton, Provider, Text, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { selectBandList, selectContestDates, selectDefaultVenue, selectPerformancesByStage, selectPerformanceSchedule, selectPerformancesForStage, selectVenueList } from '../features/contestData/contestDataSlice';
import createStyle from '../app/styles';

export function StageCalendar(props) {

  const [activeSlot, setActiveSlot] = React.useState(undefined);
  const [activeBand, setActiveBand] = React.useState(undefined);
  const theme=useTheme();

  //const styles = createStyle();
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
    cardNoHeight: {
      backgroundColor: theme.colors.secondaryContainer,
      color: theme.colors.secondary,
      opacity: 1,
      borderWidth: 1,
      marginVertical:1,
      borderRadius: 5,
    },
    sectionHeader: {
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: theme.colors.onPrimaryContainer,
      color: theme.colors.onPrimary
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

  function getBandName(band_name, slot_name, title) {
    if(title && title != "") {
      return title;
    }
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
    if(contest_date > Date.now()) {
      let split_arr = slot_name.split('_');
      let constructed_band_name = section_map[split_arr[0]] + " band " + split_arr[1]
      return constructed_band_name;
    }
    else{
      return band_name
    }
  }

  function setActiveItems(band, slot) {
    setActiveSlot(slot);
    setActiveBand(band);
  }

  const button = <Button
    icon="close"
    mode="elevated"
    onPress={() => setActiveItems(undefined, undefined)}
  >
    <Text variant="titleSmall">Go back</Text>
  </Button>;

  function addCalendarEven(band, slot) {
    const eventConfig = {
      title: getBandName(band.name, slot.item.band_draw, slot.item.title),
      startDate: slot.item.performance_times.start_timestamp,
      description: ""
      // and other options
    };
     
    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then((eventInfo) => {
        // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
        // These are two different identifiers on iOS.
        // On Android, where they are both equal and represent the event id, also strings.
        // when { action: 'CANCELED' } is returned, the dialog was dismissed
        console.warn(JSON.stringify(eventInfo));
      })
      .catch((error) => {
        // handle error such as when user rejected permissions
        //console.warn(error);
      });
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

  let content;
  if(activeSlot && activeBand && activeBand.name != "not found") {
    let pieces = activeBand.choice_pieces.filter(entry => entry.performance_slot === activeSlot.item.band_draw)
    
    let piece_info = <Card elevated style={styles.cardNoHeight} onPress={() => setActiveItems(undefined,undefined)}>
      <Card.Title title={getBandName(activeBand.name, activeSlot.item.band_draw, activeSlot.item.title)} />
      <Card.Title title={"Event time: " + moment(activeSlot.item.performance_times.start_timestamp).format('LT')} />
      <Card.Content>
        <Divider />
        <Text>&nbsp;</Text>
        <Text>Pieces performed:</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Piece</DataTable.Title>
            <DataTable.Title>Composer</DataTable.Title>
          </DataTable.Header>
            { pieces.map(element => { 
              return <DataTable.Row key={element.title + '-' + element.composer}>
                <DataTable.Cell>{element.title}</DataTable.Cell>
                <DataTable.Cell>{element.composer}</DataTable.Cell>
              </DataTable.Row>
            })}
        </DataTable>
      </Card.Content>
      {button}
    </Card>
    content = piece_info
  }
  else if(activeSlot && activeSlot.item.title && activeBand && activeBand.name == "not found") {
    content = <Card elevated style={styles.cardNoHeight} onPress={() => setActiveItems(undefined,undefined)}>
    <Card.Title title={activeSlot.item.title} />
    <Card.Content>
      <Text>Start time: {moment(activeSlot.item.performance_times.start_timestamp).format('LT')}</Text>
      <Text>&nbsp;</Text>
      <Divider />
      <Text>&nbsp;</Text>
    </Card.Content>
    {button}
  </Card>
  }
  else {
    content = <SectionList
      stickySectionHeadersEnabled={false}
      scrollEnabled={true}
      sections={buildListFormat()} 
      renderItem={(item) => {
        let band = getBandDetailsById(item.item.band_id);
        let band_name = getBandName(band.name, item.item.band_draw, item.item.title)
        let start_time = new Date(item.item.performance_times.start_timestamp)
        return (
          <TouchableOpacity>
            <Card elevated style={styles.card} onPress={() => setActiveItems(band,item)}>
              <Card.Title title={moment(start_time).format('LT') + " - " + band_name} titleNumberOfLines={2} />
            </Card>
          </TouchableOpacity>
          );  
      }} 
      renderSectionHeader={({section}) => (
        <Text style={styles.sectionHeader}  variant="displayMedium">{section.title}</Text>
      )}
      keyExtractor={item => `basicListEntry-${item.band_draw}`} 
      />
  }
  
  return (
    <Provider>
      <ImageBackground source={require('../assets/background.jpg')} style={styles.image}>
      {content}
      </ImageBackground>
    </Provider>
  );
};
