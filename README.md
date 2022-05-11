# Citypop

Search for countries and cities to see each cities population in a proper way.

## Technology:
### Backend:
    "axios": "^0.27.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.18.1",
    "iso-3166-1": "^2.1.1"

### Frontend:
    "@react-navigation/native": "^6.0.10",
    "@react-navigation/native-stack": "^6.6.2",
    "@react-navigation/stack": "^6.2.1",
    "@reduxjs/toolkit": "^1.8.0",
    "@types/react-redux": "^7.1.23",
    "@types/styled-components-react-native": "^5.1.3",
    "axios": "^0.26.1",
    "expo": "~44.0.0",
    "expo-status-bar": "~1.2.0",
    "npm-run-all": "^4.1.5",
    "react": "17.0.1",
    "react-dom": "17.0.1",
    "react-native": "0.64.3",
    "react-native-paper": "^4.12.1",
    "react-native-safe-area-context": "3.3.2",
    "react-native-screens": "~3.10.1",
    "react-native-web": "0.17.1",
    "react-redux": "^7.2.6",
    "redux-thunk": "^2.4.1",
    "styled-components": "^5.3.5"

### How to start the application:
1. Clone the repo
2. Go into the backend directory and create a ".env" file and add the following:
<br />PORT = 4000
<br />CITY_URL = http://api.geonames.org/searchJSON?style=LONG&lang=se&maxRows=1&username=weknowit&name_equals=
<br />COUNTRY_URL = http://api.geonames.org/searchJSON?style=LONG&lang=se&maxRows=3&username=weknowit&cities=cities500&orderby=population&country=
3. Change directory into backend and type "npm install".
4. Change diretory into frontend folder and type "npm install".
5. Stay in the frontend diretory and type "npm start" to start the project.
6. Run the iOS/android simulator (if you want to run the application on your mobile device you have to change localhost to your ip adress)
7. Enjoy the application!

## Author: Oscar Gregorius
