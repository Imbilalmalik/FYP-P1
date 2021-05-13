import React,{useState} from 'react';
import {View,Text, Dimensions, Alert} from 'react-native';
import MainMap from "../../components/MainMap/MainMap"
import {useRoute, useNavigation} from '@react-navigation/native';
import GasUpVehicleTypes from '../../components/GasUpVehicleTypes/GasUpVehicleTypes';
import ConnectingMaps from '../../components/ConnectingMaps/ConnectingMaps';
import{API, graphqlOperation, Auth} from 'aws-amplify';
import{createOrder} from '../../graphql/mutations'

function Results(props) {
    const typeState = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const {originPlace, destinationPlace} = route.params

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }

    // submit to server
    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const date = new Date();
      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        oreiginLongitude: originPlace.details.geometry.location.lng,

        destLatitude: destinationPlace.details.geometry.location.lat,
        destLongitude: destinationPlace.details.geometry.location.lng,

        userId: userInfo.attributes.sub,
        providerId: "1",
        status:"NEW"
      }

      const response = await API.graphql(
        graphqlOperation(
          createOrder, {
            input: input
          },
        )
      )

      console.log(response);
     navigation.navigate("OrderScreen",{id:response.data.createOrder.id})
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <MainMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 400}}>
        <GasUpVehicleTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
}

export default Results;