import * as React from 'react';
import { Text, Button, View, FlatList } from "react-native";
import { useState } from "react";

import { Card, Paragraph, Title } from 'react-native-paper';



export function BandCard(props) {
  const [item, setItem] = useState(props.item.item);

  return (
    <Card>
      <Card.Title title={item.name} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.name}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: item.band_photo }} />
    </Card>
  )
}