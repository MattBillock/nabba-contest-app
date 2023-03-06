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
  const section_map = {
    'championship': 1,
    'first': 2,
    'second': 3,
    'third': 4,
    'youth_open': 7,
    'youth_first': 6,
    'youth_championship': 5,
    'Open': 8,
    'Non-Traditional': 9,
    'Exhibition': 11,
    'Brass Choir': 10,
    'A section': 1,
    'B section': 2,
    'youth': 7,
  };
  let sortedBandList =  [...bandList].sort((a,b) => { 
    if(section_map[a.band_section] == section_map[b.band_section]) {
      if( a.name < b.name) {
        return -1;
      }
      else{
        return 1;
      }
    }
    if(section_map[a.band_section] < section_map[b.band_section]) {
      return -1
    }
    else {
      return 1;
    }

  })
  let content;
  if(activeBandId < 0) {
    content = sortedBandList.map((band) => {
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