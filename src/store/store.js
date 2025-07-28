import { configureStore } from "@reduxjs/toolkit";
import counterStore from "./counterSlice";

const store=configureStore({
    reducer:{
        counter:counterStore

    }
})
export default store;