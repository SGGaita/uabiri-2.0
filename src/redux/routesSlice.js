import { createSlice } from "@reduxjs/toolkit"

const initialState= {
   busStops: null,
   pickup:null,
   dropoff:null
}

export const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers:{
        setBusStops: (state,action)=>{
            state.busStops = action.payload
        },
        setPickUp:(state,action)=>{
            state.pickup =action.payload
        },
        setDropOff:(state, action)=>{
            state.dropoff = action.payload
        }
    }
})

export const {setBusStops, setPickUp, setDropOff} = routesSlice.actions

//selectors
export const selectBusStops= (state) => state.routes.busStops;
export const selectPickUp = (state) => state.routes.pickup
export const selectDropOff = (state) => state.routes.dropoff

export default routesSlice.reducer