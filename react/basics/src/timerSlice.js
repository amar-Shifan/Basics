import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name: 'timer',
    initialState: {value: 0 , direction: 'up'},
    reducers: {
        inc: (state => {
            if(state.value < 10) state.value += 1
            else if(state.value === 10) state.direction = 'down'
        }),
        dec: (state => {
            if(state.value > 0) state.value -= 1
            if(state.value === 0) state.direction = 'up'
        })
    }
})

export  const {inc , dec} = timerSlice.actions
export default timerSlice.reducer;