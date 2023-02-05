import * as React from 'react';
import { ScrollView } from "react-native";
import { BandCard } from './BandCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectBandList } from '../features/contestData/contestDataSlice';
import { useEffect } from 'react';
import { changePage, selectActiveBandId } from '../features/appData/appDataSlice';
import { BandDetails } from './BandDetails';


export function ContestDashboard() {
  const bandList = useSelector(selectBandList);
  const activeBandId = useSelector(selectActiveBandId);
  let content;
  if(activeBandId < 0) {
    content = bandList.map((band) => {
      if(!band.inactive) {
        return (<BandCard key={band.id} item={band} />)
      }
    })
  }
  else {
    content = <BandDetails bandId={activeBandId} />
  }
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("Competing Bands"));
  }, [dispatch])
  
  return (
    <ScrollView style={{flex:1}}>
      {content}
    </ScrollView>
  )
}