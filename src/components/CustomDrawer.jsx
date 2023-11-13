import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { FONTS,icons,images,COLORS, SIZES } from '../constants'

export const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{ marginTop:-5,paddingVertical: SIZES.padding*5, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'left',  borderBottomColor: '#fff',
        borderBottomWidth: 0.5,backgroundColor:COLORS.primary }}>
          <Image source={images.avatar} resizeMode='contain' style={{ width: 70, height: 70 }} />
          <View style={{ flexDirection: 'column', marginLeft:10 }}>
            <Text style={{...FONTS.h4, fontWeight:'700', marginBottom:1, color:COLORS.white}}>Steve Gaita</Text>
            <TouchableOpacity >
            <Text style={{...FONTS.body3, color: COLORS.inputBlue }}>View profile</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={{ paddingVertical: 25, backgroundColor:COLORS.white}}>
        <DrawerItemList {...props} />
        </View>
        <View style={{ paddingVertical: 15, paddingHorizontal: 10, backgroundColor:COLORS.white,flexDirection: 'column', alignItems: 'left',  borderTopColor: COLORS.gray,
        borderTopWidth: 0.5, }}>
         
          
         <TouchableOpacity
          style={{margin:5, paddingVertical:5, flexDirection:'row', alignItems:'center', justifyContent:'left'}}
         >
          <Image source={icons.share} resizeMode='contain' style={{tintColor:COLORS.primary,width:25, height:25}}/>
          <Text style={{...FONTS.h3, paddingLeft:SIZES.padding *2, color:COLORS.black}}> Share</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={{ margin:5, paddingVertical:5, flexDirection:'row', alignItems:'center', justifyContent:'left'}}
         >
          <Image source={icons.exit} resizeMode='contain' style={{tintColor:COLORS.primary, width:25, height:25}}/>
          <Text style={{...FONTS.body2, paddingLeft:SIZES.padding *2, color:COLORS.black,}}> Logout</Text>
          </TouchableOpacity>
      </View>
        
      </DrawerContentScrollView>

      <View style={{ paddingVertical: 15, backgroundColor:COLORS.white, flexDirection: 'row', alignSelf: 'center',  borderTopColor: COLORS.gray,
        borderTopWidth: 0.5, }}>
         
          
         <Text style={{color:COLORS.primary}}>App version - v1.0.0</Text>
      </View>
    </View>

  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.white
  }

})