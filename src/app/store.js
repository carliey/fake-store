import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
});
