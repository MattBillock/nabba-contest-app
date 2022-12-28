# NABBA technical applications and resources

This repo contains the technical resources for the [North American Brass Band Association](https://nabba.org). The primary project right now is `ContestApp`, which implements a scheduling app for brass band contests under the NABBA umbrella.

This project is built using the following technologies:

- ReactJS
- React Native
- NPM
- Yarn
- Expo

To run the code locally:

1. Navigate to ContestApp
2. `npm install` or `yarn install`
3. Configure your Expo CLI if you have not yet done so
4. `npx expo start`

## About the app

This is a react native app built using Expo to create a multi-platform app out of a single code base. It operates on a series of JSON files and media files stored in digital ocean. 

To load a schedule, update <contest-name>.ics in the appropriate folder
To add a new band, add a folder with the band ID and add photos underneath that folder, then copy those links into the contest JSON file.