import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userReducer from './userSlice';
import { authApi } from "./authApi";
// import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";




 export const store = configureStore({
    reducer: {
        userInfo: userReducer, 
        [productApi.reducerPath]: productApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
        productApi.middleware,
        authApi.middleware
    ])

})

setupListeners(store.dispatch)