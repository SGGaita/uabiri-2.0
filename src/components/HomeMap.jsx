import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerMenuComponent } from './DrawerMenuComponent'

export const HomeMap = () => {
  return (
    <View style={{height:300, 
    backgroundColor:'#a0abff', 
    //justifyContent:'center',
    //alignItems:'center'
    }}>
      <DrawerMenuComponent />
      <Text>HomeMap</Text>
    </View>
  )
}


const styles = StyleSheet.create({})