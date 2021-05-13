import React,{useState, useEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import{API, graphqlOperation} from 'aws-amplify'
import{listProviders} from '../../graphql/queries'


function MainMap(props) {

  const [providers, setProviders]=useState([]);

  useEffect(()=>{
    const fetchProviders = async () =>{

      try{
        const response = await API.graphql(graphqlOperation(
          listProviders
        ))

        setProviders(response.data.listProviders.items)
      }
      
      catch(e){
        console.error(e)
      
      }
    }
   

},[])

  const getImage =(type)=>{
    if(type==="fuel")
    {
        return require("../../assests/images/fuel.jpg");
    }
    
    else if (type ==="wash")
    {
        return require("../../assests/images/wash.png");
    }
    else if (type ==="mechanics")
    {
        // I will change this photo later
        return require("../../assests/images/wash.png")
    }
    
    
}
    return (
       <View 
    //    style={{
    //        height:250, 
    //        backgroundColor:"blue", 
    //        justifyContent:"center", 
    //        alignItems:"center"}}
           >

<MapView
       provider={PROVIDER_GOOGLE}
        // remove if not using Google Maps

      showsUserLocation={true}
       style={{
        height:"100%",
        width:"100%"}}
       region={{
        latitude: 28.450627,
        longitude: -16.263045,
         latitudeDelta: 0.0222,
         longitudeDelta: 0.0121,   
       }}>

       {providers.map((provider)=>(
         <Marker coordinate={{latitude:provider.latitude, longitude:provider.longitude}}>
           <Image source={getImage(provider.type)} 
           style={{
             height:70,
             width:70, 
             resizeMode:'contain',
             transform:[{
               rotate:`${provider.heading}deg`
             }]
            }}/>
        </Marker>)
       )}
       
    
      
     </MapView>
       
           

       </View>
    );
}

export default MainMap;