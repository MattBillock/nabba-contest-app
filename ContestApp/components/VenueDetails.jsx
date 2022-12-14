import * as React from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import { Card, IconButton, Paragraph, Text } from 'react-native-paper';
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

export function VenueDetails(props) {
  const venue_details = NabbaData.venue_details
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.jpg')} style={styles.image}>
        <Card style={styles.card}>
        <Card.Cover source={{ uri: venue_details.image }} resizeMode={'cover'} />
        <Card.Title title={venue_details.name} subtitle={venue_details.address} titleNumberOfLines={1} style={styles.title} />
        <Card.Content>
          <Paragraph>{venue_details.description}</Paragraph>
        </Card.Content>
        <Card.Actions alignItems='center'>
          <IconButton icon="web" iconColor="primary" onPress={() => Linking.openURL(venue_details.website)} />
          <IconButton icon="map" />
        </Card.Actions>
        </Card>
      </ImageBackground>
    </View>
  )
}