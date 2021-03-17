/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    activeStage: 'Shipping',
  },
  reducers: {},
  extraReducers: {},
});

export default checkoutSlice.reducer;
