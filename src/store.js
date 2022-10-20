import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Slices/reducer";

export const store = configureStore({
    reducer: rootReducer
});
