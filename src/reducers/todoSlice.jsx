import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"todo",
    initialState:{
            username: localStorage.getItem("username") ?localStorage.getItem("username"):null,
        todos:[]
    },
    reducers:{
        setUserName:(state,action)=>{
            state.username=action.payload;
        }
    }
})
export const todoActions = todoSlice.actions;
export default todoSlice.reducer