import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";

export const rootReducer = combineReducers({
    todo: todoSlice.reducer
});
