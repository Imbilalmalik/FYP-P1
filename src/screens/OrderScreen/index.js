import React,{useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native'
import OrderMap from "../../components/OrderMap/index"
import { API, graphqlOperation} from 'aws-amplify';
import {getProvider, getOrder} from '../../graphql/queries'
import {onOrderUpdated , onProviderUpdated} from './subscriptions'

function OrderScreen(props) {
   const[provider, setProvider] = useState(null);
   const[order, setOrder] = useState(null);
   const route = useRoute();

//Fetching Orders on intial updates
   useEffect(()=>{
      const fetchOrder = async ()=>{
         try{

          const orderData = await API.graphql(graphqlOperation(getOrder,{
             id:route.params.id
          }));

          setOrder(orderData.data.getOrder)
         }catch(e){

         }
      }

      fetchOrder();
   },[])


//UpdatedOrder Subscriptions
useEffect(()=>{
const subscription = API.graphql(graphqlOperation(onOrderUpdated,{
   id:route.params.id
})).subscribe({
   next:({provider, value})=>setOrder(value.data.onOrderUpdated),
   error:error=>console.warn(error)
})
return ()=> subscription.unsubscribe();
},[])


//Fetch provider data when order is completed
   useEffect   (()=>{

      if(!order?.providerID || order.providerId ==="1"){
         return;
      }
      const fetchProvider = async ()=>{
         try{
          const providerData = await API.graphql(graphqlOperation
            (getProvider,{
             id:order.providerId
          })
          );
   
          setProvider(providerData.data.getProvider)
         }catch(e){
   
         }
      }
   
      fetchProvider();
   },[order])

   //UpdatedProvider Subscriptions
useEffect(()=>{
   if(!order?.providerID || order.providerId ==="1"){
      return;
   }
   const subscription = API.graphql(graphqlOperation(onProviderUpdated,{
      id:order.providerId
   })).subscribe({
      next:({provider, value})=>setProvider(value.data.onProviderUpdated),
      error:error=>console.warn(error)
   })
   return ()=> subscription.unsubscribe();
   },[order])
   

    return (
       <View style={{
          display:'flex',
          justifyContent:"center"}}>
         <View style={{height:Dimensions.get("window").height-370}}>
         <OrderMap provider={provider}/>


       </View>
       
       <View>
            <Text>Status of your appointment : {order?.status}</Text>
      </View>


       </View>
    );
}

export default OrderScreen;