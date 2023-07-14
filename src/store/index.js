import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../slice/Auth'


export default configureStore({
    reducer: {
       auth: AuthReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'})