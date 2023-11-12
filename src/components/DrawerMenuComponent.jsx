import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { icons } from '../constants'
import { useNavigation } from '@react-navigation/native';

export  const DrawerMenuComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={{alignSelf:'flex-start', margin:10 }} >
      <TouchableOpacity style={{padding:10,borderRadius:30,elevation:1, backgroundColor:'white'}}
      onPress={() => navigation.toggleDrawer()}
      >
        <Image source={icons.menu} resizeMode='contain' style={{width:18, height:18}}/>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({})