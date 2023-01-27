import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';


const RootNavigator = (props) => {  
  const styles = {
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
  };
  return (
    <NavigationContainer>
      <Navigation contestData={props.contestData} />
    </NavigationContainer>
  );
};

export default RootNavigator;