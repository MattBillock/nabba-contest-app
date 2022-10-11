import { Text, Button, View } from "react-native";
import {GOOGLE_CLIENT_ID, GOOGLE_API_KEY} from '@env'
import { useState } from "react";
import * as Google from 'expo-google-app-auth';

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
  console.log(config)
  Google.logInAsync(config).then((result) => {
    setType(result[0]);
    setAccessToken(result[1]);
    setUser(result[2]);
    if (type === 'success') {
      // Then you can use the Google REST API
      fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then((userResult) => {
        setUserInfoResponse(userResult) 
      });
      setContentValue(userInfoResponse);
    }
  });
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
  }

  //apiCalendar.listUpcomingEvents(100).then(({result}:any) => {
  //  setContestEvents(result)
  //})
  return (    
    <View>
      <Button title={authButtonText} disabled={!authButtonVisible}  onPress={handleAuthClick}/>
      <Text>
        {contentValue}
      </Text>
    </View>
  );
};
