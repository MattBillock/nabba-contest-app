import * as React from 'react';
import { Text, Button, View } from "react-native";
import {GOOGLE_CLIENT_ID, GOOGLE_API_KEY, EXPO_GOOGLE_CLIENT_ID} from '@env'
import { useState } from "react";
import * as Google from 'expo-auth-session/providers/google';


const expoConfig = {
  "webClientId": GOOGLE_CLIENT_ID,
  "expoClientId": EXPO_GOOGLE_CLIENT_ID
}

const config = {
  "clientId": GOOGLE_CLIENT_ID,
  "apiKey":GOOGLE_API_KEY,
  "scope":"https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const CALENDAR_ID = 'c_fd136e6992fe258c3f9cb3e54320aa2c0116f5ebc4c857baffbcbe5c8ea09b2b@group.calendar.google.com';



//const apiCalendar = new ApiCalendar(config);

export function MyCalendar(props) {

  const [type, setType] = useState();
  const [accessToken, setAccessToken] = useState();
  const [user, setUser] = useState();
  const [userInfoResponse, setUserInfoResponse] = useState();
  const [request, response, promptAsync] =  Google.useAuthRequest({
    expoClientId:expoConfig.expoClientId,
    webClientId:expoConfig.webClientId
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const {authentication} = response;
      setType(authentication[0]);
      setAccessToken(authentication[1]);
      setUser(authentication[2]);
      
    }
  }, [response]);

  const [date, setDate] = useState(new Date());
  const [contestEvents, setContestEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [calendars, setCalendars] = useState([]);

  const [authButtonVisible, setAuthButtonVisible] = useState(true);
  const [authButtonText, setAuthButtonText] = useState("auth button")

  const [signoutButtonVisible, setSignoutButtonVisible] = useState(false);

  const [contentValue, setContentValue] = useState();
  
  function handleAuthClick() {
    setAuthButtonText("Clicked");
      fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then((userResult) => {
        setUserInfoResponse(userResult) 
      });
      setContentValue(userInfoResponse);
  }

  //apiCalendar.listUpcomingEvents(100).then(({result}:any) => {
  //  setContestEvents(result)
  //})
  return (    
    <View>
      <Button title={authButtonText} disabled={!authButtonVisible}   onPress={handleAuthClick}/>
      <Text>
        {contentValue}
      </Text>
    </View>
  );
};
