import * as React from 'react';
import { StyleSheet, Text, Button, View, FlatList, Linking, Dimensions, ImageBackground } from "react-native";
import { useState } from "react";

import { Avatar, Card, IconButton, Paragraph, Surface, Title, TouchableRipple } from 'react-native-paper';
import Constants from 'expo-constants';
import NabbaData from '../assets/contest_schedules/nabba2023.json'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Constants.statusBarHeight,
    },
    
    image: {
      width:'100%', 
      height:'100%', 
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      flex: 1,
      width: Dimensions.get('window').width*.95,
    
    }
  });

export function Vendors(props) {
    const partner_details = NabbaData.partner_details
    return (
      <View style={styles.container}>
          <Card style={styles.card}>
          <Card.Cover source={{ uri: partner_details.image_src }} resizeMode={'cover'} />
          <Card.Title title={partner_details.name} titleNumberOfLines={1} style={styles.title} />
          <Card.Actions alignItems='center'>
            <IconButton icon="web" iconColor="primary" onPress={() => Linking.openURL(partner_details.link)} />
            <IconButton icon="map" />
          </Card.Actions>
          </Card>
      </View>
    )
}