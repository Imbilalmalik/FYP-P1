import React from 'react';
import {View, Text, Image,Pressable} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

function GasUpRow(props) {
const {type,onPress,isSelected} = props;

const getImage =()=>{
    if(type.type==="fuel")
    {
        return require("../../assests/images/fuel.jpg");
    }
    
    else if (type.type ==="wash")
    {
        return require("../../assests/images/wash.png");
    }
    else if (type.type ==="mechanics")
    {
        // I will change this photo later
        return require("../../assests/images/wash.png")
    }
    
    
}
    


    return (
      <Pressable onPress={onPress} style={[styles.container,{backgroundColor:isSelected?'grey':'white'}]}>
          {/* image */}
          <Image 
          style={styles.image}
          source={getImage()}/>
         <View style={styles.middleContainer}>

             <Text style={styles.title}>{type.type}</Text>

             <Text style={styles.time}>08:00 pm Drop Off</Text>

         </View>
         <View style={styles.rightContainer}>

             <Ionicons name={'pricetag'} size={12} style={{color:"green"}}/>

             <Text style={styles.price}>{type.price}rs</Text>

         </View>

      </Pressable>
    );
}

export default GasUpRow;