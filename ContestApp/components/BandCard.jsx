import * as React from 'react';
import { StyleSheet, Text, Button, View, FlatList, Linking, Dimensions, ImageBackground } from "react-native";
import { useState } from "react";

import { Avatar, Card, Chip, IconButton, Paragraph, Surface, Title, TouchableRipple, useTheme } from 'react-native-paper';
import Constants from 'expo-constants';
import createStyle from '../app/styles';

export function BandCard(props) {
  const [item, setItem] = useState(props.item);
  const theme=useTheme();
  const styles = createStyle();
  return (
      <Card>
        <Card.Cover source={{ uri: item.band_logo }} resizeMode={'contain'} />
        <Card.Title title={item.name} titleNumberOfLines={1} />
        
        <Card.Actions alignItems='center'>
          <Chip mode='outlined' compact icon="information">{item.band_section.toUpperCase()}</Chip>
          <IconButton icon="web" iconColor={theme.colors.primary} onPress={() => Linking.openURL(item.website)} />
          <IconButton icon="email" onPress={() => Linking.openURL("mailto:"+item.contact_email)}/>
          <IconButton icon="more" />
        </Card.Actions>
      </Card>
  )
}