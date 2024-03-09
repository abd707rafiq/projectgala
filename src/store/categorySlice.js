// src/redux/categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: '',
  reducers: {
    setSelectedCategory: (state, action) => action.payload,
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
