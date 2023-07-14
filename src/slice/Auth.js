import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";
const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUserStart: state => {
            state.isLoading = true

        },
        signUserSucces: (state, action) => {
            state.isLoading = false
            state.loggedIn = true
            state.user = action.payload
            setItem("token", action.payload.token)
            // console.log(action.payload.token)
        },
        signUserFailture: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        logoutUser: state => {
            state.user = null
            state.loggedIn = false
        }
    }
})

export const {
    signUserFailture,
    signUserStart,
    signUserSucces,
    logoutUser
} = authSlice.actions
export default authSlice.reducer

