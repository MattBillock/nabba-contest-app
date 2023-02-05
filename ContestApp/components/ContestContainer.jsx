import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectSelectedContestId } from '../features/selectedContestId/selectedContestIdSlice';
import Navbar from './Navbar';
import { Appbar, useTheme } from 'react-native-paper';
import createStyle from '../app/styles';
import { TopAppBar } from './TopAppBar';


export default function ContestContainer(props) {
  
  const selectedContestId = useSelector(selectSelectedContestId);
  const styles = createStyle();
  const theme = useTheme();

  const contestData = useSelector(state => {
    return state.contestList.contestList.find(contest => contest.id === selectedContestId)
  });
  return (
      <SafeAreaView style={styles.container}>
        <TopAppBar />
        <Navbar contestData={contestData} />      
      </SafeAreaView>
  );
}