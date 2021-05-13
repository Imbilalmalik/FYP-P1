import React from "react";
import { View, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import styles from './styles'


function Row({data}) {

    return (
        <View style={styles.row}>
        <View style={styles.iconContainer}>
          {data.description === 'Home'
            ? <Entypo name='home' siz={20} color={'yellow'} />
            : <Entypo name='location-pin' siz={20} color={'yellow'} />
          }
          </View>
      <Text style={styles.locationText}>{data.vicinity || data.description}</Text>
    </View>
    );
}

export default Row;