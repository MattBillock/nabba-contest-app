import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { VenueDetails } from './VenueDetails.jsx';
import { About } from './About.jsx';
import { MyCalendar } from './Calendar.jsx'
import { ContestDashboard } from './ContestDashboard.jsx';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

export default function Navbar() {

  return (
      <Tab.Navigator 
        initialRouteName="Schedule"
        options={{
        tabBarActiveTintColor: '#e91e63'
      }}>
        <Tab.Screen name="Schedule" options={{
          tabBarLabel:'Schedule', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock-outline" color={color} size={24} />
          )
        }} component={MyCalendar} />
        <Tab.Screen name="Bands" options={{
          tabBarLabel:'Bands', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="music-circle" color={color} size={24} />
          )
        }} component={ContestDashboard} />
        <Tab.Screen name="Venue" options={{
          tabBarLabel:'Venue', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="office-building-marker" color={color} size={24} />
          )
        }} component={VenueDetails} />
        <Tab.Screen name="About" options={{
          tabBarLabel:'About', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={24} />
          )
        }} component={About} />
      </Tab.Navigator>
  );
}