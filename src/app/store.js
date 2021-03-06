import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});

console.log(store.getState());
