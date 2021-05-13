
import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import {View, Text,Platform,StatusBar, PermissionsAndroid} from 'react-native';
// import Results from './src/screens/Results/Results';
// import HomeScreen from './src/screens/HomeScreen/index';
// import DestinationPage from './src/screens/DestinationPage/DestinationPage'
// import Search from './src/screens/Results/Results'



import Router from './src/Navigation/Root';


function App() {

  const androidPermission = async () =>{

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Access",
          message:
            "GasUp wants to Know your Location. We will reach you at your doorstep",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }


    useEffect(()=>{
      if(Platform.OS ==="android"){
        androidPermission();
      }
      else{
        //Ask for Permission for iOS
        //This function only works for iOS and is failed for Android
        //Reason Unkown maybe A bug in their liberary at the time of development
        Geolocation.requestAuthorization();
      }

    },[])
    
  };
 
  return (
    <>
      <Router/>
    </>
      
  );
}



export default withAuthenticator(App) ;