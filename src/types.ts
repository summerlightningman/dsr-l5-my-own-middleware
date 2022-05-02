import store from "./store";

export type Value = number;

export interface CounterState {
    value: Value
}

export enum CounterActionType {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
}

interface IncrementAction {
    type: CounterActionType.INCREMENT,

}

interface DecrementAction {
    type: CounterActionType.DECREMENT,

}

export type CounterAction = IncrementAction | DecrementAction;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch