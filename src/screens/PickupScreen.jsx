import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from 'react-native'
import React from 'react'
import { selectBusStops, setPickUp } from '../redux/routesSlice'
//import { useDispatch, useSelector } from 'react-redux';
import { COLORS, routes } from '../constants';
import { useNavigation } from '@react-navigation/native';

export const PickupScreen = () => {
    //const busStops = useSelector(selectBusStops);
    const navigation = useNavigation()
    //const dispatch = useDispatch();


    const handlePickUpSelection = (item) => {
        //dispatch(setPickUp(item))
        navigation.navigate(routes.DROPOFF_SCREEN)
    }

    return (
        <View>
            <FlatList
                data={busStops}
                ItemSeparatorComponent={() => (
                    <View
                        style={{ backgroundColor: COLORS.gray, height: 1 }}>

                    </View>
                )}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ padding: 15 }}
                        onPress={() => handlePickUpSelection(item)}>
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