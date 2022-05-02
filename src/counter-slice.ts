import {CounterState, Value} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        add: (state: CounterState, action: PayloadAction<Value>) =>
            ({...state, value: state.value + (action.payload || 1)})
    }
});

export const {add} = counterSlice.actions

export default counterSlice