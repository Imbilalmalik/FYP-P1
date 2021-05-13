import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import MainMap from '../../components/MainMap/MainMap'
import MessageScreen from '../../components/MessageScreen/MessageScreen'
import FirstSearchComponent from '../../components/FirstSearchComponent/FirstSearchComponent'

function HomeScreen(props) {
    return (
       <View style={{
          display:'flex',
          justifyContent:"center"}}>



         <View style={{height:Dimensions.get("window").height-370}}>
         <MainMap/>
         </View>
          

          {/* Now a message Screen here */}

          <MessageScreen/>

          {/* FirstSearchComponent */}
          
          <FirstSearchComponent/>




       </View>
    );
}

export default HomeScreen;