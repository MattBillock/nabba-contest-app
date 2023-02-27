
import * as React from 'react';
import { StyleSheet,  View, FlatList, Linking, Dimensions, ImageBackground, ScrollView } from "react-native";
import { useState } from "react";

import { Avatar, Card, Text, Button, Chip, FAB, IconButton, Paragraph, Surface, Title, TouchableRipple, useTheme } from 'react-native-paper';
import Constants from 'expo-constants';
import createStyle from '../app/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeActiveBand, selectActiveBandId } from '../features/appData/appDataSlice';
import { selectBandById } from '../features/contestData/contestDataSlice';

/*
"id": 9,
"name": "The Dallas Brass Band",
"website": "https://www.dallasbrassband.org/",
"band_bio": "Dallas Brass Band was founded in January 2017 as an outreach project of The Salvation Army, with the organization providing a rehearsal venue and the use of instruments and equipment. The band is based on the British brass band tradition and now consists of over 30 members. The current band is made up of players from a variety of different musical backgrounds, with many coming out of the Salvation Army banding tradition, as well as a number from institutions such as the University of North Texas, Texas Christian University and University of Texas at Arlington. During its short existence, the band has already hosted masterclasses with well-known personalities such as Prof. David Childs and Dr. Jonathan Corry and performed at some of Dallas’s most prestigious venues, including the Murchison Hall Performing Arts Center (University of North Texas), Ed Landreth Auditorium (Texas Christian University), Irving Arts Center and Nicholas Martin Hall (Texas Wesleyan University). It has also accompanied international soloists Owen Farr (International Tenor Horn Soloist), Thomas Hultén (Principal Trombone - Houston Grand Opera), Charlie Green (Britain’s Got Talent finalist) and Elmer Churampi (Trumpet - Dallas Symphony Orchestra). The band was named 1st Section Champions at NABBA in 2022. The band’s current leadership is Principal Conductor Grant Jameson. Its mission is to provide high quality music making to the Dallas Fort Worth Metroplex, and give brass players and percussionists the opportunity to experience a traditional British brass band setting.",
"band_photo": "https://nabba-mobile-app.sfo3.cdn.digitaloceanspaces.com/band_media/9/band_photo.JPG",
"band_logo": "https://nabba-mobile-app.sfo3.cdn.digitaloceanspaces.com/band_media/9/band_logo.jpg",
"conductor_name": "Grant Jameson",
"conductor_bio": "Originally from Dublin, Ohio, Grant Jameson has spent extensive time both in the United States and the United Kingdom. He received his Bachelor of Music and Masters degrees from the Royal Welsh College of Music and Drama (RWCMD) in Cardiff (UK) where he studied with David Childs for six years. During his time in the UK, Grant immersed himself in the British brass band tradition and won many awards and prizes within this genre, including the Best soloist prize at the Welsh Open (2014). Grant has also performed as guest soloist with many of the UK's finest bands, including Cory - the world's No. 1 ranked band, Grimethorpe Colliery from the movie 'Brassed Off!', Brighouse and Rastrick and the current National Champions of Great Britain (2018), Foden's. Grant was also principal euphonium of Tredegar Town, Tongwynlais and Woodfalls bands, before joining the Flowers Band with whom he won various contests and featured as soloist, performing part of Sir Karl Jenkin's Euphonium Concerto, on the band's highly acclaimed CD release - Celebrate! - 5o years of Flowers. As a recording artist, Grant has released two solo albums: Genesis (2015) and Versatility Reimagined (2019). He's also been featured on TV and radio with broadcasts by the BBC and S4C, as well as NPR. In 2019 Grant appeared alongside fellow Besson Euphonium Artist, David Childs, performing duets at New York's Rainbow Lounge in a concert to honor Hollywood A-lister, Catherine Zeta-Jones CBE. On multiple occasions, Grant had the honor of performing as a soloist and chamber musician for HRH The Prince of Wales at his private residence in the UK. Currently a DMA candidate and Teaching Fellow at the University of North Texas, Grant is busy as both performer as Principal Euphonium with the Dallas Winds and Musical Director or the Dallas Brass Band.",
"conductor_photo": "https://nabba-mobile-app.sfo3.cdn.digitaloceanspaces.com/band_media/9/conductor_photo.JPG",
"band_section": "championship",
"contact_email": "dallasbrassband@gmail.com",
"choice_pieces": [
  {
    "title": "Journey of the Lone Wolf",
    "composer": "Simon Dobson"
  }
],
"contest_draw_identifiers": ["C_F","C_CC"]
*/

export function BandDetails(props) {
  const styles = createStyle();
  const dispatch = useDispatch();
  const activeBandId = useSelector(selectActiveBandId);
  const item = useSelector(state => {
    return state.contestData.band_list.filter(band => band.id === activeBandId)[0]
  });
  const button = <Button
                    icon="close"
                    mode="elevated"
                    onPress={() => dispatch(changeActiveBand(-1))}
                  >
                    <Text variant="titleSmall">Go back</Text>
                  </Button>

  let website = "";
  if(item.website) {
    website = <IconButton icon="web" onPress={() => Linking.openURL(item.website)} />
  }
  let email="";
  if(item.contact_email) {
    email = <IconButton icon="email" onPress={() => Linking.openURL("mailto:"+item.contact_email)}/>
  }
  return (
    <ScrollView>
      {button}
      <Card style={styles.card} key={activeBandId + "-band"}>
        <Card.Cover source={{ uri: item.band_logo }} resizeMode={'contain'} />
        <Card.Title titleNumberOfLines={1}>{item.name}</Card.Title>
        <Card.Content>
          <Text variant="bodyLarge">{item.band_bio}</Text>
        </Card.Content>

        <Card.Actions alignItems='center'>
          <Chip mode='outlined' compact icon="information">{item.band_section.toUpperCase()}</Chip>
          <View>{website}</View>
          <View>{email}</View>
        </Card.Actions>
      </Card>
      <Card style={styles.card} key={activeBandId + "-conductor"}>
        <Card.Cover source={{ uri: item.conductor_photo }} resizeMode={'contain'} />
        <Card.Title titleNumberOfLines={1}>{item.conductor_name}</Card.Title>
        <Card.Content>
          <Text variant="bodyLarge">{item.conductor_bio}</Text>
        </Card.Content>
      </Card>
      {button}
    </ScrollView>
  );
}