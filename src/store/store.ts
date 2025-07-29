import { configureStore } from "@reduxjs/toolkit";
import counterStore from "./counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./dummyProducts";

const store = configureStore({
  reducer: {
    counter: counterStore,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
