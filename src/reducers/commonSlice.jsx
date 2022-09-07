import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
    name:"common",
    initialState:{
        theme:localStorage.getItem("theme")
    },
    reducers:{
        setTheme:(state,action)=>{
            state.theme=action.payload
        }
    }
})

export const commonActions = commonSlice.actions
export default commonSlice.reducer
