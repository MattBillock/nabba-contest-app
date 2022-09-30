import { Text } from "react-native";
import ApiCalendar from 'react-google-calendar-api';
import {GOOGLE_CLIENT_ID, GOOGLE_API_KEY} from '@env'

const config = {
  "clientId": GOOGLE_CLIENT_ID,
  "apiKey":GOOGLE_API_KEY,
  "scope":"https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}


export function MyCalendar(props) {
  const apiCalendar = new ApiCalendar(config);
  return <Text>Please select the contest from the list below</Text>;
};
