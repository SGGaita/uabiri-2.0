import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, icons, images } from '../constants'
import { useNavigation } from '@react-navigation/native'

export const OnboardingScreen = () => {

    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                {/*Image*/}
                <Image source={images.matatu} style={{ width: 350, height: 350 }} />
            </View>

            <View style={styles.textContainer}>
                <Text style={{ fontSize: 32, paddingBottom: 16 }}>
                    Your daily commute made easy!
                </Text>
                <Text style={{ fontSize: 20, fontWeight: '200', paddingBottom: 30, }}>
                    Plan your journey, track your ride, and pay your fare at your convenience.
                </Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                    onPress={()=>navigation.navigate('Login')}
                    >
                        <Text style={{ color: '#fff', fontSize: 16 }}>
                            Get started
                        </Text>
                        <View style={{backgroundColor: '#fff', padding:5, borderRadius:130}}>
                        <Image source={icons.arrowRight} style={{ width: 20, height: 20 }} />
                        </View>
                        
                    </TouchableOpacity>
                </View>
            </View>




        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding * 2,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    imageContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor:'#ddd'
    },
    textContainer: {
        flex: 1,
    }
    ,
    buttonContainer: {
        
    },
    button: {
        flexDirection: 'row',
        padding: SIZES.padding * 2,
        backgroundColor: '#053c5a',
        borderRadius: 35,
        justifyContent: 'space-between',
        alignItems:'center'
    }
})