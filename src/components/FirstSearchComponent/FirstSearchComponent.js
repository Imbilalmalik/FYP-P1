import React from 'react';
import {View,Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles'

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from "react-native-vector-icons/Entypo";


function FirstSearchComponent(props) {
 const Swap = useNavigation();

    const navigateScreens = () =>{
        Swap.navigate("Destination");
    }


    return (
        <View>
            {/* Input Box */}
            <Pressable onPress={navigateScreens} style={styles.inputBox}>
                <Text style={styles.inputText}> Make an appointment </Text>
                    <View style={styles.timeContainer}>
                        <AntDesign name={'clockcircle'} size={16} color={"#4d4d4d"}/>
                        <Text>Now</Text>
                        <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
                    </View>
            </Pressable>

            {/* Previous Destination */}
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={"white"}/> 
              </View>
                     <Text style={styles.locationText}>Johar Town</Text>
          </View>

            {/* Home Destination */}
            <View style={styles.row}>
              <View style={[styles.iconContainer,{backgroundColor:"#4867b7"}]}>
                 <Entypo name={'home'} size={16} color={"white"}/> 
              </View>
             <Text style={styles.locationText}>Office</Text>
          </View>
           
        </View>
    );
}

export default FirstSearchComponent;