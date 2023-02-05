import * as React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import { Image, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, Card, MD2Colors, RadioButton, Text, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import createStyle from '../app/styles.js';
import { fetchList, selectContestList, selectContestListStatus } from '../features/contestList/contestListSlice.js';
import { contestSelected, selectSelectedContestId } from '../features/selectedContestId/selectedContestIdSlice.js';
import Navbar from './Navbar.jsx';







export default function ContestSelector(props) {
  //const [contestList, setcontestList] = useState(props.contestList);
  const contestList = useSelector(selectContestList);
  const contestListStatus = useSelector(selectContestListStatus);
  const error = useSelector(state => state.contestList.error);

  const dispatch = useDispatch();

  const styles = createStyle();
  useEffect(() => {
    if (contestListStatus === 'idle') {
      dispatch(fetchList())
    }
  }, [contestListStatus, dispatch])



  let content;
  if(contestListStatus === 'loading') {
    content = <ActivityIndicator animating={true} color={MD2Colors.blue800} />
  }
  else if(contestListStatus === 'succeeded') {
    content = contestList.map(contest => {
      return (
        <TouchableOpacity key={contest.id}>
          <Card key={contest.id} onPress={() => dispatch(contestSelected(contest.id))} style={styles.card}>
            <Card.Cover source={contest.contest_logo_file} resizeMode={'contain'} />
            <Card.Title title={contest.name} />
          </Card>
        </TouchableOpacity>
      )
    })
  }
  else if(contestListStatus === 'failed') {
    content = <Text>{'error'}</Text>
  }

  return (
    <View style={styles.container}>        
      {content}
    </View>
  );   
}


/*           <TouchableOpacity>
            <RadioButton.Group>
              {
                renderedRadioButtons
              }
            </RadioButton.Group>
          </TouchableOpacity>*/