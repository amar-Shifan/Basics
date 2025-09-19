import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice';
import timerReducer from './timerSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer , 
        timer: timerReducer
    }
})