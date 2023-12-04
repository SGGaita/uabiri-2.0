import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DrawerMenuComponent } from './DrawerMenuComponent'
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { COLORS, images } from '../constants';

export const RouteMap = () => {
    const origin = {latitude: 28.450627, longitude: -16.2639045};
    const destination = {latitude: 28.450127, longitude: -16.269045};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyA5DHygZo9YnXLT0dAQxPT2fZsm8gNQZ6s'

  return (
    <View style={{
     // flex: 3,
      backgroundColor: '#a0abff',
      //justifyContent:'center',
      //alignItems:'center'
    }}>

      <MapView
      style={{ height:'100%', width:'100%' }}
       mapType="standard"
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >

<MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor={COLORS.primary}
  />

   <Marker
                    coordinate={{
                        latitude: origin.latitude,
                        longitude: origin.longitude,
                    }}
                    title='Pick up'
                    description=''
                    identifier='origin'
                    callout={{
                        // Make the callout always open
                        tooltip: true,
                      }}
                    
                >
                    <Image source={images.location} resizeMode='contain' style={{ width: 15, height:15,  }} />
                   

                </Marker> 

                 <Marker
                    coordinate={{
                        latitude: destination.latitude,
                        longitude: destination.longitude,
                    }}
                    title='Drop off'
                    description=''
                    identifier='destination'
                    
                    >
                        
                    <Image source={images.destination} resizeMode='contain' style={{ width: 20, height: 20, }} />

                </Marker>

  </MapView>
      
     
    </View>
  )
}


const styles = StyleSheet.create({})