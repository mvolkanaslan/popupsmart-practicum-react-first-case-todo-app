import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";
import commonReducer from "./reducers/commonSlice";
import authReducer from "./reducers/authSlice";

export const store = configureStore({
    reducer:{
        todoList:todoReducer,
        common:commonReducer,
        auth:authReducer
    }
})