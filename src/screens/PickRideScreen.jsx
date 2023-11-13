import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeMap, RiderOptionsCard } from '../components'

const PickRideScreen = () => {
  return (
    <View style={{display:'flex', justifyContent:'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 408}}>
      <HomeMap/>
      </View>
     
     <View style={{height:408}}>
     <RiderOptionsCard/>
     </View>
     
    </View>
  )
}

export default PickRideScreen

const styles = StyleSheet.create({})