import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'all',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    showAll: (state) => {
      state.category = 'all';
    },
    showFood: (state) => {
      state.category = 'food';
    },
    showDrinks: (state) => {
      state.category = 'drinks';
    },
  },
});

export const { showAll, showFood, showDrinks } = productSlice.actions;
export const selectCategory = (state) => state.products.category;
export default productSlice.reducer;
