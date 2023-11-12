import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBusStops, selectPickUp, setDropOff } from '../redux/routesSlice'
import { COLORS, routes } from '../constants'
import { useNavigation } from '@react-navigation/native'

export const DropoffScreen = () => {
  const busStops = useSelector(selectBusStops)
  const pickup = useSelector(selectPickUp)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const selectedBusStopIndex = busStops.findIndex(
    (busStop) => busStop.name === pickup.name
  );

  const filteredBusStops = busStops.filter(
    (_, index) => index > selectedBusStopIndex
  );

  const handleDropOffSelection = (item) => {
    dispatch(setDropOff(item));
    // Perform navigation or any other actions here
    navigation.navigate(routes.MAP_SCREEN)
  };

  return (
    <View>
      <FlatList
        data={filteredBusStops}
        ItemSeparatorComponent={() => (
          <View
            style={{ backgroundColor: COLORS.gray, height: 1 }}>

          </View>
        )}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 15 }}
            onPress={() => handleDropOffSelection(item)}>
            <Text
              style={{
                fontSize: 14
              }}
            >{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}



const styles = StyleSheet.create({})