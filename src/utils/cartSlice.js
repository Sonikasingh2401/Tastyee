import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name:"cart",
    initialState: {
        items: [],
    },
    reducers: {
        // Redux is state management library because it manages the input and the output states here.
        addItems :  (state,action)=>{
            // mutating (directly updating) the state over here.
            state.items.push(action.payload);
        },
        removeItems : (state,action)=>{
            state.items.pop();
        },
        clearCart : (state,action)=>{
        state.items.length = 0;
        },
    },

});

export const {addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;