import { createSlice } from "@reduxjs/toolkit";

export const cardslice = createSlice({
    initialState: [],
    name:"cardslice",
    reducers: {
        addtocard: (state, action) => {
            const findproduct = state.find((product) => product.id === action.payload.id);
            console.log(findproduct)
            if(findproduct) {
                findproduct.quantity += 1;
            } else {
                const productclone = {...action.payload, quantity:1} 
                state.push(productclone);
            }

        },
        deletecard: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        clear: (state, action) => {
            return []
        },
    }
})


export const {addtocard, deletecard, clear} = cardslice.actions;
export default cardslice.reducer;