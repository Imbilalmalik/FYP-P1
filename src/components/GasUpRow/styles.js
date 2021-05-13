import {StyleSheet} from 'react-native';
import { Directions } from 'react-native-gesture-handler';
const styles = StyleSheet.create({
    image:{
        resizeMode:"contain",
        height:50,
        width:50
    },
    container:{
     padding:20,
     flexDirection:"row",
     justifyContent:"space-between",
     alignItems:"center"

    },
    price:{
        marginRight:20,
        fontWeight:'bold',
        fontSize:18
    },
    rightContainer:{
    width:90,
    alignItems:"center",
    justifyContent:"flex-end",
    flexDirection:"row"
   
    

    },
    middleContainer:{
        flex:1,
        justifyContent:"space-between",
        marginHorizontal:10,
        
        
    },
    time:{
        color:"#d3d3d3"
    },
    title:{
        fontWeight:'bold',
        fontSize:15
    }
    
})
export default styles;