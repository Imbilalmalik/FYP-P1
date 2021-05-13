// import 'react-native-gesture-handler';
import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/index'
import DestinationPage from '../screens/DestinationPage/DestinationPage'
import Results from '../screens/Results/Results'
import  OrderScreen from '../screens/OrderScreen/index'
const Stack = createStackNavigator();


function RootNavigator(props) {
    return (
     
        <Stack.Navigator
        screenOptions={{headerShown:false}}
      //   initialRouteName={"Results"}
        >
           <Stack.Screen name="Home" component={HomeScreen}/>
           <Stack.Screen name="Destination" component={DestinationPage}/>
           <Stack.Screen name="Results" component={Results}/>
           <Stack.Screen name ="OrderScreen" component={OrderScreen}/>
        </Stack.Navigator>
        
   
    );
}

export default RootNavigator;