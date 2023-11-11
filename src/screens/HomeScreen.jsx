import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeMap, HomeSearch } from '../components'

export const HomeScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <HomeMap/>
      <HomeSearch/>
    </View>
  )
}



const styles = StyleSheet.create({})