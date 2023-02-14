import * as React from 'react';
import { useEffect } from 'react';
import { Linking, ScrollView } from 'react-native';
import { Card, IconButton, Paragraph, Title, useTheme } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { changePage } from '../features/appData/appDataSlice';


export function About(props) {

  const theme=useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("About"));
  }, [dispatch])
  return (
    <ScrollView>     
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
            <IconButton icon="web" iconColor={theme.colors.primary} onPress={() => Linking.openURL("https://www.nabba.org")} />
            <IconButton icon="email" />
          </Card.Actions>
        </Card>
        
        <Card>
          <Card.Title title="About the app" />
          <Card.Content>
            <Paragraph>
              This application was developed by Sparrow Court Consulting as a donation to the North American Brass Band Association. Please use the envelope button below to submit any bug reports.</Paragraph> 
            <Paragraph />
            <Paragraph onPress={() => Linking.openURL("http://sparrowcourt.com")}>Find us at https://sparrowcourt.com</Paragraph>
            <Paragraph />
            <Paragraph onPress={() => Linking.openURL("mailto:info@sparrowcourt.com")}> Want to use ContestApp for your contest or performance? Contact us at info@sparrowcourt.com to start the conversation!</Paragraph>
          </Card.Content>
          <Card.Actions alignItems='center'>
            <IconButton icon="web" iconColor={theme.colors.primary} onPress={() => Linking.openURL("http://www.sparrowcourt.com")} />
            <IconButton icon="email" />
          </Card.Actions>
        </Card>
    </ScrollView>
  )
}