import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("productsslice/fetchProducts",async () => {
  const res = await fetch("https://fakestoreapi.com/products")
  const data = await res.json()
  return data;
})

const productsslice = createSlice({
    initialState: [],
    name: "productsslice",
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const {} = productsslice.actions;

export default productsslice.reducer;