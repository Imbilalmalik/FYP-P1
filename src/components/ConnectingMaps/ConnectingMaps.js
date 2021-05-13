import React from 'react';
import {View, Text, Image} from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import providers from '../../assests/data/providers'

const GOOGLE_MAPS_APIKEY= "AIzaSyBQQI-lHzo4zXNrXFn8QRpBncK7I-bWjaM";

function ConnectingMaps({origin, destination}) {


    const originLoc = 
    {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng

    };

    const destinationLoc = 
    {
      latitude: destination.details.geometry.location.lat,
      longitude: destination.details.geometry.location.lng

    }
  return (
       <View>

<MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
           <MapViewDirections
                origin={originLoc}
                destination={destinationLoc}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="green"
                
  />

  <Marker
  coordinate = {originLoc}
  title = {'Origin'}
  />
<Marker
  coordinate = {destinationLoc}
  title = {'Destination'}
  />
    
      
     </MapView>
       
           

       </View>
    );
}

export default ConnectingMaps;