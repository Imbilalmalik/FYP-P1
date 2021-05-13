import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputBox:{
        flexDirection:"row",
        margin:10,
        justifyContent:"space-between",
        backgroundColor:"#cecece",
        padding:5,
        alignItems:"center"

    },
    inputText:{
        fontSize:18,
        fontWeight:"600",
        color:"#4d4d4d"
    },
    row:{
        alignItems:"center",
        flexDirection:"row",
        padding:10,
        borderColor:"#e4e4e4",
        borderBottomWidth:1
    },
    timeContainer:{
        flexDirection:"row",
        width:100,
        alignItems:"center",
        justifyContent:"space-between",
        padding:10,
        backgroundColor:"white",
        borderRadius:50
    },
    locationText:{
        padding:10,
        marginLeft:10,
        fontWeight:"bold"
  
       
    },
    iconContainer:{
      alignItems:"center",
  
      backgroundColor:"black",
      borderRadius:25,
      padding:10
    }

})
export default styles;