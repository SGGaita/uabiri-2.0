import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { icons, SIZES,COLORS } from '../constants'
import { useNavigation } from '@react-navigation/native';

export  const DrawerMenuComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={{alignSelf:'flex-start', margin:10 }} >
      <TouchableOpacity style={{
        zIndex: 50,
            height: 15,
            width: 15,
            borderRadius: 30,
            elevation: 3,
            padding: SIZES.padding * 2.5,
            margin: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary}}
      onPress={() => navigation.toggleDrawer()}
      >
        <Image source={icons.menu} resizeMode='contain' style={{ width: 15, height: 15, tintColor: COLORS.white }}/>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({})