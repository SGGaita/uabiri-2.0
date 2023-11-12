import { configureStore } from "@reduxjs/toolkit";
import navReducer from './navSlice'
import routesReducer from './routesSlice'


export const store = configureStore({
    reducer: {
      nav: navReducer,
     // user: userReducer,
      //vehicle: vehicleReducer,
      routes: routesReducer
    }
  })