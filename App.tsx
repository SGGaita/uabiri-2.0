import 'react-native-gesture-handler';
import { Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AboutScreen, ConfirmPickupDropoff, DropoffScreen, HomeScreen, LoginScreen, OnboardingScreen, PaymentScreen, PickupScreen, ProfileScreen, RouteScreen, SupportScreen } from './src/screens'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import PastTripsScreen from './src/screens/PastTripsScreen';
import { CustomDrawer } from './src/components';
import { COLORS, icons, FONTS } from './src/constants';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/redux/store';
import { PermissionsAndroid, Platform } from 'react-native';
import PickRideScreen from './src/screens/PickRideScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  //Splash screen
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    checkLocationStatus();
  }, []);

  const checkLocationStatus = async () => {
    if (Platform.OS === 'android') {
      await requestLocationPermissionAndroid();
    } else {
      // Implement iOS location permission request here
    }
  };

  const requestLocationPermissionAndroid = async () => {
    console.log('Test location')
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },)

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }

    } catch (err) {

    }
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: { width: '80%' },
            drawerActiveBackgroundColor: '#cccfff'
          }}
          drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Home"
            options={{
              headerShown: false,
              drawerIcon: () => (<Image
                source={icons.ride}
                resizeMode='contain'
                style={{ tintColor: COLORS.primary, width: 25, height: 25 }}
              />),
              title: "Get a ride",
              drawerLabelStyle: { ...FONTS.h3, fontWeight: '100', color: COLORS.black, paddingVertical: 3 }
            }}
          >

            {() => (
              <Stack.Navigator
                initialRouteName='Onboard'
              >
                <Stack.Screen
                  name='Onboard'
                  component={OnboardingScreen}
                  options={{
                    headerShown:false
                  }}
                />
                <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                  headerShown:false
                }}
                />
                <Stack.Screen
                  name='Home1'
                  component={HomeScreen}
                  options={{
                    headerShown: false
                  }}
                />
                <Stack.Screen
                  name="Route"
                  component={RouteScreen}
                  options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    title: "Select a route",
                  }}
                />
                <Stack.Screen
                  name="Pickup"
                  component={PickupScreen}
                  options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    title: "Select a pickup",
                  }}
                />
                <Stack.Screen
                  name='Dropoff'
                  component={DropoffScreen}
                  options={{
                    headerShown: true,
                    //headerTitle:'Select Drop-off',
                    headerTitleAlign: 'center',
                    title: "Select a drop off",
                  }}
                />
                <Stack.Screen
                  name='Confirm'
                  component={ConfirmPickupDropoff}
                  options={{
                    headerShown: false,
                    //headerTitle:'Select Drop-off',
                    headerTitleAlign: 'center',
                    title: "Confirm pickup/dropoff",
                  }}
                />
                <Stack.Screen
                  name='Pickride'
                  component={PickRideScreen}
                  options={{
                    headerShown: false,
                    //headerTitle:'Select Drop-off',
                    headerTitleAlign: 'center',
                    title: "Pick a ride",
                  }}
                />

              </Stack.Navigator>
            )}

          </Drawer.Screen>
          <Drawer.Screen name="Payment"
            options={{
              drawerIcon: () => (<Image
                source={icons.wallet}
                resizeMode='contain'
                style={{ tintColor: COLORS.primary, width: 25, height: 25 }}
              />),
              title: "Payments",
              drawerLabelStyle: { ...FONTS.h3, fontWeight: '100', color: COLORS.black, paddingVertical: 3 }
            }}
            component={PaymentScreen} />


          <Drawer.Screen name="Trips" component={PastTripsScreen}
            options={{
              drawerIcon: () => (<Image
                source={icons.history}
                resizeMode='contain'
                style={{ tintColor: COLORS.primary, width: 25, height: 25 }}
              />),
              title: "Ride History",
              drawerLabelStyle: { ...FONTS.h3, fontWeight: '100', color: COLORS.black, paddingVertical: 3 }
            }}
          />
          <Drawer.Screen name="Support" component={SupportScreen}
            options={{

              drawerIcon: () => (<Image
                source={icons.support}
                resizeMode='contain'
                style={{ tintColor: COLORS.primary, width: 25, height: 25 }}
              />),
              title: "Help & Support",
              drawerLabelStyle: { ...FONTS.h3, fontWeight: '100', color: COLORS.black, paddingVertical: 3 }
            }}
          />
          <Drawer.Screen name="About" component={AboutScreen}
            options={{
              drawerIcon: () => (<Image
                source={icons.info}
                resizeMode='contain'
                style={{ tintColor: COLORS.primary, width: 25, height: 25 }}
              />),
              drawerLabelStyle: { ...FONTS.h3, fontWeight: '100', color: COLORS.black, paddingVertical: 3 }
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>

  )
}