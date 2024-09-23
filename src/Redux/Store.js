import {configureStore} from "@reduxjs/toolkit"
import authReducer from './authSlice';
import cartReducer from './cartSlice';
export const Store=configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat()
})