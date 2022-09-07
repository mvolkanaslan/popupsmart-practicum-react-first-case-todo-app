import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        username: localStorage.getItem("username") ? localStorage.getItem("username") : null,
    },
    reducers: {
        setUserName: (state, action) => {
            state.username = action.payload;
        },
    }
})
export const authActions = authSlice.actions
export default authSlice.reducer