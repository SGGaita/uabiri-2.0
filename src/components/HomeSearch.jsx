import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons } from '../constants'

export const HomeSearch = () => {
    return (
        <View>
            {/*Input search box*/}
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.inputText}
                    placeholderTextColor='#000'
                    placeholder='Where to?'
                />
            </View>

            {/* Location row*/}
            <TouchableOpacity style={styles.rowLocation}>
                <View style={styles.iconContainer}>
                    <Image source={icons.home} resizeMode='contain' style={{ tintColor: 'white', width: 20, height: 20 }} />
                </View>
                <Text style={styles.destinationText}>Mpaka Road</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rowLocation}>
                <View style={[styles.iconContainer, {backgroundColor:COLORS.primary}]}>
                    <Image source={icons.home} resizeMode='contain' style={{ tintColor: 'white', width: 20, height: 20 }} />
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#b0b0b0',
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    inputText: {
        flex: 1,
        padding: 2,
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
        backgroundColor: '#b0b0b0'
    },
    rowLocation: {
        margin: SIZES.padding,
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        //elevation: 1,
        borderBottomWidth: 1,
        borderColor: '#dbdbdb'
    },
    iconContainer: {
        padding: 10,
        backgroundColor: '#b3b3b3',
        borderRadius: 25
    },
    destinationText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '600'
    }
})