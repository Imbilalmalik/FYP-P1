import React from 'react';
import { View, Text, Pressable } from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer"
import {Auth} from 'aws-amplify';

function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: '#47faa5', padding: 15}}>
  
          
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <View style={{
              backgroundColor: 'black',
              width: 70,
              height: 70,
              borderRadius: 35,
              marginRight: 10,
            }}/>
  
            <View>
              <Text style={{color: 'white', fontSize: 24}}>User</Text>
              <Text style={{color: 'white'}}>5.00 *</Text>
            </View>
          </View>
  
        
          <View style={{
            paddingVertical: 5,
            marginVertical: 10,
            borderBottomWidth: 1,
            borderColor: 'white',
            borderTopWidth: 1,

          
          }}>
            <Pressable
              onPress={() => {console.warn('Messages')}}>
              <Text style={{color: 'white', paddingVertical: 5,}}>Messages</Text>
            </Pressable>
          </View>
  
         
          <Pressable
            onPress={() => {console.warn('Make Money Driving')}}>
            <Text style={{color: 'white', paddingVertical: 5,}}>Do more with your account</Text>
          </Pressable>
  
          <Pressable onPress={() => {console.warn('Make Money Driving')}}>
            <Text style={{color: 'white', paddingVertical: 5}}>Make money driving</Text>
          </Pressable>

        
  
        </View>
  
        <DrawerItemList {...props} />
        
        
        <Pressable onPress={() => {Auth.signOut()}}>
          <Text style={{padding: 5, paddingLeft: 20}}>Logout</Text>
        </Pressable>
      </DrawerContentScrollView>
    );
}

export default CustomDrawer;