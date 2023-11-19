import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Slices/Products-slice";
import cardslice from "./Slices/Card-slice";


export const store = configureStore({

    reducer:{
      products: ProductsSlice,
      card: cardslice
    },
})


