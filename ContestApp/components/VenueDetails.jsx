import * as React from 'react';
import { ScrollView, Linking } from 'react-native';
import { Button, Card, IconButton, Paragraph, useTheme } from 'react-native-paper';
import { selectVenueDetails } from '../features/contestData/contestDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changePage } from '../features/appData/appDataSlice';
import { selectSelectedContestId } from '../features/selectedContestId/selectedContestIdSlice';


export function VenueDetails(props) {
  const venue_details = useSelector(selectVenueDetails);

  const theme=useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("Venue Details"));
  }, [dispatch])

  const selectedContestId = useSelector(selectSelectedContestId);

  const contestData = useSelector(state => {
    return state.contestList.contestList.find(contest => contest.id === selectedContestId)
  });
  return (
    <ScrollView>
      <Card>
        <Card.Cover source={{ uri: contestData.contest_logo_file }} resizeMode={'contain'} />
        <Card.Title title={venue_details.contest_name} />
        <Card.Content>
          <Paragraph>{venue_details.contest_name}</Paragraph>
          {(venue_details.judge_link &&  venue_details.judge_link != "") && (<Button onPress={() => Linking.openURL(venue_details.judge_link)}>Judging information</Button>) }
          {(venue_details.solo_ensemble_link && venue_details.solo_ensemble_link != "") && (<Button onPress={() => Linking.openURL(venue_details.solo_ensemble_link)}>I&E information</Button>) }
          
          <Button onPress={() => Linking.openURL("https://nabba.org/wp-content/uploads/2023/04/NABBA-2023-Band-Contest-Flow.pdf")}>NABBA Contest Flow</Button>
        </Card.Content>
      </Card>
        <Card >
        <Card.Cover source={{ uri: venue_details.image }} resizeMode={'cover'} />
        <Card.Title title={venue_details.name} subtitle={venue_details.address} titleNumberOfLines={1}  />
        <Card.Content>
          <Paragraph>{venue_details.description}</Paragraph>
        </Card.Content>
        <Card.Actions alignItems='center'>
          <IconButton icon="web" iconColor={theme.colors.primary} onPress={() => Linking.openURL(venue_details.website)} />
          <IconButton icon="map"  onPress={() => Linking.openURL(venue_details.map_file)} />
        </Card.Actions>
        </Card>
    </ScrollView>
  )
}