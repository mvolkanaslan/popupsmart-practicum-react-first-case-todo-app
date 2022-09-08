import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: [],
    },
    reducers: {
        setTodoList: (state, action) => {
            state.todoList = action.payload
        },
        addTodoToList: (state, action) => {
            state.todoList.push(action.payload)
        },
        updateTodo: (state, action) => {
            let todoToUpdated = action.payload;
            let updatedTodoList = state.todoList.map(todo => {
                return todo.id === todoToUpdated.id ? todoToUpdated : todo;
            })
            state.todoList = updatedTodoList
        },
        deleteTodo: (state, action) => {
            let todoToDeleted = action.payload;
            let updatedTodoList = state.todoList.filter(todo => todo.id !== todoToDeleted.id)
            state.todoList = updatedTodoList
        }
    }
})
export const todoActions = todoSlice.actions;
export default todoSlice.reducer