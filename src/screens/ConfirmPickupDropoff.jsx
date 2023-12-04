import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { RouteMap, ConfirmLocations } from '../components'


export const ConfirmPickupDropoff = () => {
    return (
        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
            <View style={{ height: Dimensions.get('window').height - 275 }}>
                <RouteMap />
            </View>

            <View style={{ height: 275 }}>
                <ConfirmLocations />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({})