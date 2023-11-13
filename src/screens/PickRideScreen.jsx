import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeMap, RiderOptionsCard } from '../components'

const PickRideScreen = () => {
  return (
    <View style={{flex:1}}>
     <HomeMap/>
     <RiderOptionsCard/>
    </View>
  )
}

export default PickRideScreen

const styles = StyleSheet.create({})