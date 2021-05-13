import React from 'react';
import {View, Text, Pressable} from 'react-native';
import GasUpRow from '../GasUpRow/GasUpRow'
import typesData from '../../assests/data/types'
import styles from './styles'

function GasUpVehicleTypes({typeState, onSubmit}) {
     const [selectedtype, setSelectedType] = typeState;

    

    return (
       <View>
           
            {typesData.map(type=>
            <GasUpRow  
            type={type} 
            key={type.id}
            isSelected={type.type ===selectedtype}
            onPress={()=>setSelectedType(type.type)}
            />)}

            <Pressable onPress={onSubmit} 
            style={{
                alignItems:"center", 
                justifyContent:"center",
                width : "100%",
                backgroundColor:"#47faa5",
                padding:15,
                margin:0,
                borderRadius:30
                }}>
                <Text style={{fontWeight:"bold", color:"white"}}>Confirm Appointment</Text>
            </Pressable>

       </View>
    );
}

export default GasUpVehicleTypes;