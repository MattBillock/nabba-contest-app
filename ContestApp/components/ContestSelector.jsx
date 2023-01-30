import * as React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import { TouchableOpacity, View } from 'react-native';
import { Card, RadioButton, Text, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList, selectContestList, selectContestListStatus } from '../features/contestList/contestListSlice.js';
import { contestSelected, selectSelectedContestId } from '../features/selectedContestId/selectedContestIdSlice.js';
import Navbar from './Navbar.jsx';







export default function ContestSelector(props) {
  //const [contestList, setcontestList] = useState(props.contestList);
  const contestList = useSelector(selectContestList);
  const contestListStatus = useSelector(selectContestListStatus);
  const error = useSelector(state => state.contestList.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if (contestListStatus === 'idle') {
      dispatch(fetchList())
    }
  }, [contestListStatus, dispatch])



  let content;
  if(contestListStatus === 'loading') {
    content = <Text>{"Loading!"}</Text>
  }
  else if(contestListStatus === 'succeeded') {
    content = contestList.map(contest => {
      return (
        <TouchableOpacity key={contest.id}>
          <Card key={contest.id} onPress={() => dispatch(contestSelected(contest.id))}>
            <Card.Content>
              <Title>{contest.name}</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )
    })
  }
  else if(contestListStatus === 'failed') {
    content = <Text>{'error'}</Text>
  }

  return (
    <View>        
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