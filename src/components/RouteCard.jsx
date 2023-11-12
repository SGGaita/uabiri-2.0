import { Image, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import { COLORS, images,icons, SIZES, } from '../constants';
import { useNavigation } from '@react-navigation/native';

export const RouteCard = () => {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [route, setRoutes] = useState([]); // Initial empty array of routes
    //const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        const subscriber = firestore()
            .collection('routes')
            .onSnapshot(querySnapshot => {
                const routes = [];

                querySnapshot.forEach(documentSnapshot => {
                    routes.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setRoutes(routes);
                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

   

    // if (loading) {
    //     return <ActivityIndicator />;
    // }


    const handleRouteSelection = (item) => {
        const formattedData = item.busStops.map((route) => {
            const { latitude, longitude } = route.coordinates;
            return {
              coordinates: {
                latitude,
                longitude,
              },
              fareAmount: route.fareAmount,
              name: route.name,
              routeName: item.name
            };
          });
          console.log(formattedData)
       // dispatch(setBusStops(formattedData))
    navigation.navigate('Pickup')
    };

    return (
        <>


            {
                route.map(item => {
                    console.log(item)
                    return <TouchableOpacity
                        style={
                            styles.container
                        }
                        key={item.key}

                        onPress={() => handleRouteSelection(item)}
                    >
                        <View
                            style={{
                                elevation: 1,
                                borderRadius: 5,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'white'
                            }}
                        >
                            <Text>Line: {item.name}</Text>
                            <View style={{

                                flexDirection: 'row',
                                alignItems: 'center',

                            }}>
                                <Image source={images.location} resizeMode='contain' style={{ marginRight: 10, width: 10, height: 30 }} />
                                <Text style={{
                                    color: COLORS.darkgray,
                                    fontSize: 12
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
                                            fontWeight:500,
                                        }}>
                                            {item.pickUp}
                                        </Text>
                                    </View>


                                    <View>
                                        <Text style={{
                                            color: COLORS.black,
                                            fontSize: 15,
                                            paddingTop: 2,
                                            fontWeight:500,
                                        }}>
                                            {item.dropOff}
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
                                    fontSize: 12
                                }}>
                                    Drop off
                                </Text>
                            </View>
                        </View>



                    </TouchableOpacity>
                })
            }
        </>






    )
}



const styles = StyleSheet.create({

    container: {
        padding: SIZES.padding * 1
    },
})