import * as React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectSelectedContestId } from '../features/selectedContestId/selectedContestIdSlice';
import Navbar from './Navbar';
import { Appbar, useTheme } from 'react-native-paper';
import createStyle from '../app/styles';


export default function ContestContainer(props) {
  
  const selectedContestId = useSelector(selectSelectedContestId);
  const styles = createStyle();
  const theme = useTheme();

  const contestData = useSelector(state => {
    return state.contestList.contestList.find(contest => contest.id === selectedContestId)
  });
  return (
      <View style={styles.container}>
        <Appbar mode="center-aligned" style={styles.opacity}/>
        <Navbar contestData={contestData} />      
      </View>
  );
}