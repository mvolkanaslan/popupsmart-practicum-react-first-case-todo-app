import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: [],
    },
    reducers: {
        setTodoList:(state,action)=>{
            state.todoList=action.payload
        }
    }
})
export const todoActions = todoSlice.actions;
export default todoSlice.reducer