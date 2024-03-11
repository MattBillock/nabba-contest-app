import * as React from 'react';
import { useEffect } from 'react';
import { Linking, ScrollView } from 'react-native';
import { Button, Card, IconButton, Paragraph, Title, useTheme } from 'react-native-paper';
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
            <Paragraph>The purpose for which NABBA is organized is:</Paragraph>
            <Paragraph>(a) To sponsor and hold local, state, regional, national and international contests and festivals for the purpose of improving the performing standards and abilities of British-type brass bands.</Paragraph>
            <Paragraph>(b) To foster, promote and otherwise encourage the establishment, growth and development of British-type brass bands throughout the United States and Canada.</Paragraph>
            <Paragraph>(c) To support and help further the music education of its members and to advance the public’s appreciation of British-type brass bands.</Paragraph>
            <Paragraph>(d) To serve as a resource for musical and organizational assistance to British-type brass bands throughout North America
            </Paragraph>
            <Title>Board of Directors</Title>
            <Paragraph>NABBA President - Dr. Patrick Herak, Vice-President - Dr. Mark Taylor, Secretary - Dr. Douglas Lindsey, Treasurer - Bob Crook</Paragraph>
            <Paragraph>Board Members, Term ending June 30, 2024 - Dr. John Bell, Dr. Aaron Campbell, David Jones, Ron Lutterbie, Dr. Anthony Walker, Matt Billock, & Patrick Oliverio</Paragraph>
            <Paragraph>Board Members, Term ending June 30, 2025 - Michael Olefsky, Brad Vrooman, & Bryen Warfield</Paragraph>
            <Paragraph>Board Members, Term ending June 30, 2026 - Rebecca Barger Amato, Jarod Estrada, Tony Granados, Roger Oyster, Jesse Rackley, Sal Scarpa, & Christopher Ward.</Paragraph>
          </Card.Content>
          <Card.Actions alignItems='center'>
            <IconButton icon="web" iconColor={theme.colors.primary} onPress={() => Linking.openURL("https://www.nabba.org")} />
            <IconButton icon="email" onPress={() => Linking.openURL("mailto:nabba@nabba.org")}/>

            <Button onPress={() => Linking.openURL("https://nabba.org/legal/")}>NABBA legal information</Button>
          </Card.Actions>
        </Card>
        
        <Card>
          <Card.Title title="About the app" />
          <Card.Content>
            <Paragraph>
              This application was developed by Sparrow Court Consulting as a donation to the North American Brass Band Association. Please use the envelope button below to submit any bug reports.</Paragraph> 
            <Paragraph />
            <Button onPress={() => Linking.openURL("http://sparrowcourt.com")}>Find us at https://sparrowcourt.com</Button>
            <Paragraph>Want to use ContestApp for your contest or performance? </Paragraph>
            <Button onPress={() => Linking.openURL("mailto:info@sparrowcourt.com")}>Email info@sparrowcourt.com to get started!</Button>
          </Card.Content>
          <Card.Actions alignItems='center'>
            <IconButton icon="web" iconColor={theme.colors.primary} onPress={() => Linking.openURL("http://www.sparrowcourt.com")} />
            <IconButton icon="email" />
          </Card.Actions>
        </Card>
    </ScrollView>
  )
}