import * as React from 'react';
import { Linking, ScrollView } from "react-native";

import { Card, IconButton, List, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import createStyle from '../app/styles';
import { selectPartnerDetails } from '../features/contestData/contestDataSlice';



export function Vendors() {
    const partner_details = useSelector(selectPartnerDetails);
    const theme = useTheme();
    const styles = createStyle();
    let content;
    content = partner_details.map((partner) => {
      return (<Card style={styles.card} key={partner.name}>
          <Card.Cover source={{ uri: partner.image_src }} resizeMode={'contain'} />
          <Card.Actions alignItems='center'>
            <IconButton icon="web" iconColor={theme.colors.primary} onPress={() => Linking.openURL(partner.link)} />
          </Card.Actions>
        </Card>)});
    return (
      <ScrollView>
        {content}
      </ScrollView>
    )
}