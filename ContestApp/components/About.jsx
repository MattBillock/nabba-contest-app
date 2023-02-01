import * as React from 'react';
import { ScrollView } from 'react-native';
import { Card, IconButton, Paragraph, Title, useTheme } from 'react-native-paper';


export function About(props) {

  const theme=useTheme();
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
            <IconButton icon="web" iconColor={theme.colors.primary} onPress={() => Linking.openURL(item.website)} />
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
            <IconButton icon="web" iconColor={theme.colors.primary} onPress={() => Linking.openURL(item.website)} />
            <IconButton icon="email" />
            <IconButton icon="more" />
          </Card.Actions>
        </Card>
    </ScrollView>
  )
}