import * as React from 'react';
import { Image, ScrollView } from 'react-native';
import { Appbar, Card, IconButton, Paragraph, Title, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import createStyle from '../app/styles';
import { selectActivePage } from '../features/appData/appDataSlice';
import { selectSelectedContestId } from '../features/selectedContestId/selectedContestIdSlice';


export function TopAppBar(props) {
  const activePage = useSelector(selectActivePage)
  const theme=useTheme();
  const styles=createStyle();  
  const selectedContestId = useSelector(selectSelectedContestId);

  const contestData = useSelector(state => {
    return state.contestList.contestList.find(contest => contest.id === selectedContestId)
  });
  console.log(contestData);
  return (
    <Appbar mode="center-aligned" style={styles.title}>
      <Appbar.Content>
        <Image source={{uri: contestData.contest_logo_file}}/>
      </Appbar.Content>
    </Appbar>
  )
}