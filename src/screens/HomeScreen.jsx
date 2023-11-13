import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { DrawerMenuComponent, HomeMap, HomeSearch, RouteCard } from '../components'
import { COLORS, SIZES } from '../constants'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


export const HomeScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={{ display: 'flex', justifyContent: 'space-between' }}>
      <View
        style={{
          zIndex: 50,
          position: 'absolute',
        }}
      >
        <DrawerMenuComponent />
      </View>
      <View style={{ height: Dimensions.get('window').height - 408 }}>


        <HomeMap />

      </View>

      <View style={styles.container}>
        <ScrollView
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <Text
              style={{ fontSize: 18, fontWeight: 500 }}
            >
              All Routes
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Route')}
            >
              <View >
                <Text style={{ fontSize: 15, color: COLORS.secondary }}>VIEW ALL</Text>
              </View>
            </TouchableOpacity>
          </View>
          <RouteCard />
        </ScrollView>
      </View>


    </View>
  )
}



const styles = StyleSheet.create({

  container: {
    padding: SIZES.padding * 1,
    height: 408

  }
})