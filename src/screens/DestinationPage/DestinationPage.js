import React,{useState} from 'react';
import { useEffect } from 'react';
import {View, TextInput,SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Row from './Row';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles'
function DestinationPage(props) {

// const [ fromPlaceText, setFromPlaceText] = useState("");
// const [destinationText , setDestinationText] =useState("");

const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};



const swap = useNavigation();


useEffect(()=>{
    console.log("useEffect is depricatied")
    if(originPlace && destinationPlace){
        swap.navigate("Results",{
          originPlace,
          destinationPlace

        })
    }
},[originPlace, destinationPlace])

    return (
        <SafeAreaView>

           
    

<GooglePlacesAutocomplete
      placeholder="From Where"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
    
        setDestinationPlace({data,details});
      }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            //For Current Location we need to set Current Location True and must give a label to currentLocation Label
            // currentLocation={true}
            // currentLocationLabel='Current location'

          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: {
              position: 'absolute',
              top: 60,
            },
            separator: styles.separator,
            container:{
              position:"absolute",
              top:60,
              left:10,
              right:10
            }
            
          }}
      
      fetchDetails
      query={{
          key: 'AIzaSyBQQI-lHzo4zXNrXFn8QRpBncK7I-bWjaM',
          language: 'en',
          components: 'country:pak'
      }}

      // predefinedPlaces={[homePlace, workPlace]}
      renderRow={
        (data)=> <Row data={data}
        />}

      renderDescription={(data)=>
        data.vicinity || data.description
      }
    />

<GooglePlacesAutocomplete
      placeholder="Where you want"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
    
        setOriginPlace({data,details});
      }}
      enablePoweredByContainer={false}
          suppressDefaultStyles
          //For Current Location we need to set Current Location True and must give a label to currentLocation Label
          currentLocation={true}
          currentLocationLabel='Current location'

          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
            listView:{
              position:"absolute",
              top:120
            },
            container:{
              position:"absolute",
              top:0,
              left:10,
              right:10
            }
            
          }}
      
      fetchDetails
      query={{
        key: 'AIzaSyBQQI-lHzo4zXNrXFn8QRpBncK7I-bWjaM',
        language: 'en',
        components: 'country:pak'
      }}

      predefinedPlaces={[homePlace, workPlace]}

     renderRow={
       (data)=> <Row data={data}
       />}

       renderDescription={(data)=>
        data.vicinity || data.description
      }
    />

    <View style={styles.round}>

    </View>

    <View style={styles.linear}>
      
    </View>


    <View style={styles.square}>

    </View>
      
       </SafeAreaView>
    );
}

export default DestinationPage;