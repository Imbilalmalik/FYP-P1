// import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer'

import HomeScreen from '../screens/HomeScreen/index'
import Main from './Main'
import DestinationPage from '../screens/DestinationPage/DestinationPage'
import Results from '../screens/Results/Results'

const DrawerNavigator = createDrawerNavigator();

const DummyData = (props)=>(
<View style={{justifyContent:"center", alignItems:"center", flex:1}}>
      <Text>{props.name}</Text>
</View>
)


function RootNavigator(props) {
    return (
      <NavigationContainer>
       <DrawerNavigator.Navigator drawerContent={(props)=>
         (<CustomDrawer {...props}/>)
         }>
          <DrawerNavigator.Screen name="Home" component={Main}/>

          <DrawerNavigator.Screen name="Help">
             {()=> <DummyData name="Help"/>}
          </DrawerNavigator.Screen>

          <DrawerNavigator.Screen name="Wallet">
             {()=> <DummyData name="Wallet"/>}
          </DrawerNavigator.Screen>
          
          <DrawerNavigator.Screen name="Settings">
             {()=> <DummyData name="Settings"/>}
          </DrawerNavigator.Screen>
          
          <DrawerNavigator.Screen name="About Us">
             {()=> <DummyData name="About Us"/>}
          </DrawerNavigator.Screen>
          

       </DrawerNavigator.Navigator>
      </NavigationContainer>
    );
}

export default RootNavigator;