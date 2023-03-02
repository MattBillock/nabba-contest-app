import * as React from 'react';
import { useState } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { VenueDetails } from './VenueDetails.jsx';
import { About } from './About.jsx';
import { MyCalendar } from './Calendar.jsx'
import { ContestDashboard } from './ContestDashboard.jsx';
import { Vendors} from './Vendors.jsx'
import { selectSelectedContestId } from '../features/selectedContestId/selectedContestIdSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContestData } from '../features/contestData/contestDataSlice.js';
import createStyle from '../app/styles.js';

const Tab = new createMaterialBottomTabNavigator();

export default function Navbar(props) {

  const selectedContestId = useSelector(selectSelectedContestId);
  const contestDataFile = useSelector(state => {
    return state.contestList.contestList.find(contest => contest.id === selectedContestId).contest_data_file
  });
  const contestDataStatus = useSelector(state => state.contestData.status)
  const dispatch = useDispatch();

  const styles = createStyle();
  useEffect( () => {
    if (contestDataStatus === 'idle') {
      dispatch(fetchContestData(contestDataFile));
    }
  }, [contestDataStatus, dispatch])
  return (
      <Tab.Navigator 
        initialRouteName="Schedule"
        options={{
          tabBarActiveTintColor: '#e91e63'
        }}
      >
        <Tab.Screen name="Schedule" options={{
            tabBarLabel:'Schedule', 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="clock-outline" color={color} size={24} />
            )
          }} 
          children={props => <MyCalendar />} 
        />
        <Tab.Screen name="Bands" 
          options={{
            tabBarLabel:'Bands', 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="music-circle" color={color} size={24} />
            )
          }} 
          children={props => <ContestDashboard />} 
        />
        <Tab.Screen name="Vendors" 
          options={{
            tabBarLabel:'Vendors', 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="store-search" color={color} size={24} />
            )
          }} 
          children={props => <Vendors />} 
        />
        <Tab.Screen name="Venue" x
          options={{
            tabBarLabel:'Contest', 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="office-building-marker" color={color} size={24} />
            )
          }} 
          children={props => <VenueDetails />} />
        <Tab.Screen name="About" 
          options={{
            tabBarLabel:'About', 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information" color={color} size={24} />
            )
          }} 
          children={props => <About />} />
      </Tab.Navigator>
  );
}