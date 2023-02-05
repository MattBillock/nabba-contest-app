import * as React from 'react';
import { ScrollView } from 'react-native';
import { Card, IconButton, Paragraph, useTheme } from 'react-native-paper';
import { selectVenueDetails } from '../features/contestData/contestDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changePage } from '../features/appData/appDataSlice';


export function VenueDetails(props) {
  const venue_details = useSelector(selectVenueDetails);

  const theme=useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("Venue Details"));
  }, [dispatch])
  return (
    <ScrollView>
        <Card >
        <Card.Cover source={{ uri: venue_details.image }} resizeMode={'cover'} />
        <Card.Title title={venue_details.name} subtitle={venue_details.address} titleNumberOfLines={1}  />
        <Card.Content>
          <Paragraph>{venue_details.description}</Paragraph>
        </Card.Content>
        <Card.Actions alignItems='center'>
          <IconButton icon="web" iconColor={theme.colors.primary} onPress={() => Linking.openURL(venue_details.website)} />
          <IconButton icon="map" />
        </Card.Actions>
        </Card>
    </ScrollView>
  )
}