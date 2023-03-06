import * as React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Appbar, Banner, Card, Divider, IconButton, Menu, Paragraph, Title, useTheme } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import createStyle from '../app/styles';
import { selectActivePage } from '../features/appData/appDataSlice';
import { contestSelected, selectSelectedContestId } from '../features/selectedContestId/selectedContestIdSlice';


export function TopAppBar(props) {
  const activePage = useSelector(selectActivePage)
  const theme=useTheme();
  const styles=createStyle();  
  const selectedContestId = useSelector(selectSelectedContestId);
  const dispatch = useDispatch();

  const contestData = useSelector(state => {
    return state.contestList.contestList.find(contest => contest.id === selectedContestId)
  });
  return (
    <TouchableOpacity>
      <Appbar style={styles.appbar}>
        <Appbar.Action icon="menu" onPress={() => dispatch(contestSelected(-1))} />
        <Appbar.Content title={contestData.name} onPress={() => dispatch(contestSelected(-1))} />
      </Appbar>
    </TouchableOpacity>
  )
}