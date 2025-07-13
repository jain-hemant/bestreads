import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    me: null,
    loading: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMe: (state, action) => {
            state.me = action.payload
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.me = null
        }
    }
})

// Reducer
export const {
    setMe,
    logout
} = authSlice.actions

export default authSlice.reducer

// Selectors
export const selectAuth = (state) => state.auth
export const selectMe = (state) => state.auth.me
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated