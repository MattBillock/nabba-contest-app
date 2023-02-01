import * as React from 'react';
import { StyleSheet, Text, Button, View, FlatList, Linking, Dimensions, ImageBackground } from "react-native";
import { useState } from "react";

import { Avatar, Card, IconButton, Paragraph, Surface, Title, TouchableRipple, useTheme } from 'react-native-paper';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    width: Dimensions.get('window').width*.95,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    
    //display: "flex",
    justifyContent: "space-around",
    height: "100%",
    textAlign: "center",
    paddingVertical: 5,
  },
  title: {
    fontSize: '4vw',
    allowFontScaling: true,
  },
  logo: {
    resizeMode: 'stretch',
    width: 300,
    height: 200,
  },
  actions: {

  }
});

export function BandCard(props) {
  const [item, setItem] = useState(props.item);
  const theme=useTheme();
  return (
      <Card>
        <Card.Cover source={{ uri: item.band_logo }} resizeMode={'cover'} />
        <Card.Title title={item.name} titleNumberOfLines={1} />
        <Card.Actions alignItems='center'>
          <IconButton icon="web" iconColor={theme.colors.primary} onPress={() => Linking.openURL(item.website)} />
          <IconButton icon="email" />
          <IconButton icon="more" />
        </Card.Actions>
      </Card>
  )
}