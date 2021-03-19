/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    activeStep: 0,
    userInfo: {
      name: '',
      phone: '',
      address: '',
      apartment: '',
      city: '',
      country: '',
      zip: '',
    },
  },
  reducers: {
    completeStep(state) {
      state.activeStep += 1;
    },
    setShippingInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
  extraReducers: {},
});

export const { completeStep, setShippingInfo } = checkoutSlice.actions;

export default checkoutSlice.reducer;
