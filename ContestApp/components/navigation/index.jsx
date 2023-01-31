import * as React from 'react';
import { useState } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { VenueDetails } from './VenueDetails.jsx.js';
import { About } from './About.jsx.js';
import { MyCalendar } from './Calendar.jsx.js'
import { ContestDashboard } from './ContestDashboard.jsx.js';
import { Vendors} from './Vendors.jsx.js'

const Tab = createMaterialBottomTabNavigator();

export default function Navbar(props) {
  const styles = {
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
  };
  const [contestData, setContestData] = useState(props.contestData);
  return (
      <Tab.Navigator 
        initialRouteName="Schedule"
        options={{
          tabBarActiveTintColor: '#e91e63',
          tabStyle: styles.stickToBottom
        }}
      >
        <Tab.Screen name="Schedule" options={{
            tabBarLabel:'Schedule', 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="clock-outline" color={color} size={24} />
            )
          }} 
          children={props => <MyCalendar contestData={contestData} />} 
        />
        <Tab.Screen name="Bands" 
          options={{
            tabBarLabel:'Bands', 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="music-circle" color={color} size={24} />
            )
          }} 
          children={props => <ContestDashboard contestData={contestData} />} 
        />
        <Tab.Screen name="Vendors" 
          options={{
            tabBarLabel:'Vendors', 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="store-search" color={color} size={24} />
            )
          }} 
          children={props => <Vendors contestData={contestData} />} 
        />
        <Tab.Screen name="Venue" 
          options={{
            tabBarLabel:'Venue', 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="office-building-marker" color={color} size={24} />
            )
          }} 
          children={props => <VenueDetails contestData={contestData} />} />
        <Tab.Screen name="About" 
          options={{
            tabBarLabel:'About', 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information" color={color} size={24} />
            )
          }} 
          children={props => <About contestData={contestData} />} />
      </Tab.Navigator>
  );
}