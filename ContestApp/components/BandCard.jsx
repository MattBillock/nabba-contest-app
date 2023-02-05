import * as React from 'react';
import { StyleSheet, Text, Button, View, FlatList, Linking, Dimensions, ImageBackground } from "react-native";
import { useState } from "react";

import { Avatar, Card, Chip, IconButton, Paragraph, Surface, Title, TouchableRipple, useTheme } from 'react-native-paper';
import Constants from 'expo-constants';
import createStyle from '../app/styles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changeActiveBand } from '../features/appData/appDataSlice';

export function BandCard(props) {
  const [item, setItem] = useState(props.item);
  const theme=useTheme();
  const styles = createStyle();
  const dispatch = useDispatch();

  return (
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.band_logo }} resizeMode={'contain'} />
        <Card.Title title={item.name} titleNumberOfLines={1} />
        
        <Card.Actions alignItems='center'>
          <Chip mode='outlined' compact icon="information">{item.band_section.toUpperCase()}</Chip>
          {!!item.website  && <IconButton icon="web" onPress={() => Linking.openURL(item.website)} /> }
          {!!item.contact_email && <IconButton icon="email" onPress={() => Linking.openURL("mailto:"+item.contact_email)}/>}
          <IconButton icon="more" onPress={() => dispatch(changeActiveBand(item.id))}/>
        </Card.Actions>
      </Card>
  )
}