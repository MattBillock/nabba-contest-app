import * as React from 'react';
import { Text, Button, View, FlatList } from "react-native";
import { useState } from "react";

import { Card, Paragraph, Surface, Title, TouchableRipple } from 'react-native-paper';



export function BandCard(props) {
  const [item, setItem] = useState(props.item.item);

  return (
    <Surface>
      <TouchableRipple rippleColor="rgba(0,0,0,.32)">
      <Card mode="outlined">
        <Card.Cover source={{ uri: item.band_photo }} />
        <Card.Content>
          <Paragraph>{item.name}</Paragraph>
        </Card.Content>
      </Card>
      </TouchableRipple>
    </Surface>
  )
}