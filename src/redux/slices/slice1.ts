import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType={
    value: number
}
const initialState:CounterStateType = {
    value: 100500
};
export const counter1Slice = createSlice({
    name:"counter1",
    initialState: initialState,
    reducers:{
        increment:(state, action:PayloadAction<number>) =>{
            state.value += action.payload;
        },
        decrement:(state, action:PayloadAction<number>) =>{
            state.value -= action.payload;
        },
        reset:(state)=>{
            state.value = 0;
        },
        change:(state, action:PayloadAction<number>) =>{
            state.value = action.payload;
        }
    }

});

export const {
    increment,
    decrement,
    reset,
    change}
    = counter1Slice.actions;