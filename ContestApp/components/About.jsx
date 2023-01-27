import * as React from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import { Card, IconButton, List, Paragraph, Text, Title } from 'react-native-paper';
import Constants from 'expo-constants';

import NabbaData from '../assets/contest_schedules/nabba2023.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    color: 'white'
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
    marginTop: Constants.statusBarHeight,
    color: 'white',
    width: Dimensions.get('window').width*.95,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,

  }
});

export function About(props) {
  return (
    <View >     
        <Card >
          <Card.Title title="About NABBA"  />
          <Card.Content>
            <Paragraph>
              The North American Brass Band Association is the governing body for competing brass bands in North America.
            </Paragraph>
            <Title>Board of Directors</Title>
            <Paragraph>
              Jason Collier, Tony Granados, Jon Heaver, Dr. Patrick Herak, Alex Schnautz, Mark Taylor,
              Christopher Ward, Anita McAlister, Andrew Harms, Bryen Warfield, Sal Scarpa, Douglas Lindsey,
              Jesse Rackley, Dr. John Bell, Aaron Campbell, David Jones, Anthony Walker, Jennifer Wagner,
              Matt Billock,Patrick Oliverio
            </Paragraph>
          </Card.Content>
          <Card.Actions alignItems='center'>
            <IconButton icon="web" iconColor="primary" onPress={() => Linking.openURL(item.website)} />
            <IconButton icon="email" />
            <IconButton icon="more" />
          </Card.Actions>
        </Card>
        
        <Card>
          <Card.Title title="About the app" />
          <Card.Content>
            <Paragraph>
              This application was developed by Sparrow Court Consulting. Please direct any bug reports or issues to matt@billock.org. 
              
              Find us at https://sparrowcourt.com

              Want a custom application or website for your ensemble or event? Contact us at info@sparrowcourt.com to start the conversation!
            </Paragraph>
          </Card.Content>
          <Card.Actions alignItems='center'>
            <IconButton icon="web" iconColor="primary" onPress={() => Linking.openURL(item.website)} />
            <IconButton icon="email" />
            <IconButton icon="more" />
          </Card.Actions>
        </Card>
    </View>
  )
}