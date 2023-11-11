import 'react-native-gesture-handler';
import { Image } from 'react-native'
import React, { useEffect } from 'react'
import { AboutScreen, HomeScreen, PaymentScreen, ProfileScreen, SupportScreen } from './src/screens'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';
import PastTripsScreen from './src/screens/PastTripsScreen';
import { CustomDrawer} from './src/components';
import { COLORS, icons,FONTS } from './src/constants';

const Drawer = createDrawerNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator 
      screenOptions={{
        drawerStyle: { width:'80%'},
        drawerActiveBackgroundColor:'#cccfff'
      }}
      drawerContent={props=> <CustomDrawer {...props}/>}>
         <Drawer.Screen name="Home" 
         options={{headerShown:false, swipeEnabled:false, drawerItemStyle: { height: 0 }}}
         component={HomeScreen}/>
        <Drawer.Screen name="Payment" 
        options={{
          drawerIcon:()=>( <Image
            source={icons.wallet}
            resizeMode='contain'
            style={{ tintColor: '#000', width: 20, height: 20 }}
        />),
        drawerLabelStyle:{...FONTS.body2, fontWeight:'100',color:COLORS.black, paddingVertical:3}
      }}
        component={PaymentScreen} />
       
      
        <Drawer.Screen name="My Trips" component={PastTripsScreen}
        options={{
          drawerIcon:()=>( <Image
            source={icons.history}
            resizeMode='contain'
            style={{ tintColor: '#000', width: 20, height: 20 }}
        />),
        drawerLabelStyle:{...FONTS.body2, fontWeight:'100',color:COLORS.black, paddingVertical:3}
      }}
        />
        <Drawer.Screen name="Support" component={SupportScreen}
        options={{
          drawerIcon:()=>( <Image
            source={icons.support}
            resizeMode='contain'
            style={{ tintColor: '#000', width: 20, height: 20 }}
        />),
        drawerLabelStyle:{...FONTS.body2, fontWeight:'100',color:COLORS.black, paddingVertical:3}
      }}
        />
        <Drawer.Screen name="About" component={AboutScreen}
        options={{
          drawerIcon:()=>( <Image
            source={icons.info}
            resizeMode='contain'
            style={{ tintColor: '#000', width: 20, height: 20 }}
        />),
        drawerLabelStyle:{...FONTS.body2, fontWeight:'100',color:COLORS.black, paddingVertical:3}
      }}
        />
      </Drawer.Navigator>
    </NavigationContainer>

  )
}