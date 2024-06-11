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
        decrement:(state) =>{
            state.value -= 1;
        },
    }

});

export const {increment,decrement} = counter1Slice.actions;