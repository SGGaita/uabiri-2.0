import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerMenuComponent } from './DrawerMenuComponent'
import MapView from 'react-native-maps';

export const HomeMap = () => {
  return (
    <View style={{
     // flex: 3,
      backgroundColor: '#a0abff',
      //justifyContent:'center',
      //alignItems:'center'
    }}>

      <MapView
      style={{ height:'100%', width:'100%' }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {/*<DrawerMenuComponent />*/}
     
    </View>
  )
}


const styles = StyleSheet.create({})