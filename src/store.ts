import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import multiply from "./multiply";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
    middleware: [
        multiply
    ]
});

export default store

