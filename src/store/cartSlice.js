// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [], // You can set the initial state to whatever you want
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); // Add product information to the cart
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(product => product.title === action.payload.title);
      if (index !== -1) {
        state.splice(index, 1); // Remove the product from the cart
      }
    },
    // ... other actions related to the cart
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
