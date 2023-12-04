import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../constants'

export const ConfirmLocations = () => {
    return (
        <SafeAreaView style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
            <View>
                <TouchableOpacity
                    //onPress={() => navigation.navigate(routes.NAVIGATION_CARD)}
                    style={{
                        position: 'absolute',
                        top: 20,
                        left: 25,
                        padding: SIZES.padding
                    }}
                >
                    <Image source={icons.arrowLeft} resizeMode='contain' style={{ width: 15, height: 15 }} />
                </TouchableOpacity>
                <Text style={{ color: COLORS.black, alignSelf: 'center', paddingVertical: SIZES.padding * 3, ...FONTS.h2, fontWeight: '700' }}>Pick up - Dropoff {/*{travelTimeInformation?.distance?.text}*/}</Text>
            </View>



            <View style={{
                paddingHorizontal: 40,
                paddingVertical: 10,
                //justifyContent:'center',
                // flexDirection:'column'

            }}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',


                }}>
                    <Image source={images.location} resizeMode='contain' style={{ marginRight: 10, width: 10, height: 30 }} />
                    <Text style={{
                        color: COLORS.darkgray,
                        fontSize: 16
                    }}>
                        Pick up
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',

                    }}>

                    <View
                        style={{ width: 1, backgroundColor: COLORS.primary, justifyContent: 'center', height: 40, marginLeft: 5, marginRight: 20 }}
                    >

                    </View>

                    <View>
                        <View>
                            <Text style={{
                                color: COLORS.black,
                                fontSize: 15,
                                paddingBottom: 2,
                                fontWeight: 500,
                            }}>
                                Pickup
                            </Text>
                        </View>


                        <View>
                            <Text style={{
                                color: COLORS.black,
                                fontSize: 15,
                                paddingTop: 2,
                                fontWeight: 500,
                            }}>
                                Dropoff
                            </Text>
                        </View>
                    </View>

                </View>

                <View style={{

                    flexDirection: 'row',
                    alignItems: 'center',

                }}>
                    <Image source={images.destination} resizeMode='contain' style={{ marginRight: 10, width: 10, height: 30 }} />
                    <Text style={{
                        color: COLORS.darkgray,
                        fontSize: 16
                    }}>
                        Drop off
                    </Text>
                </View>
            </View>

            <View 
             style={{
                
             }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Pickride')}


                    style={{
                        backgroundColor: COLORS.primary,
                        paddingVertical: SIZES.padding * 1.8,
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text style={{ textAlign: 'center', color: COLORS.white, ...FONTS.h3 }}>Confirm</Text>
                    <Image source={icons.rightArrow} resizeMode='contain' style={{ position: 'absolute', right: 10, width: 15, height: 15, tintColor: COLORS.white }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({})