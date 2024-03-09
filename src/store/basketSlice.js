// basketSlice.js
import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: 0,
  reducers: {
    addToBasket: state => state + 1,
    removeToBasket:state=>state-1,
  },
});

export const { addToBasket,removeToBasket } = basketSlice.actions;
export default basketSlice.reducer;
