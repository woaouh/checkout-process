/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    userInfo: {
      name: '',
      phone: '',
      address: '',
      apartment: '',
      city: '',
      country: '',
      zip: '',
    },
    billingInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      apartment: '',
      city: '',
      country: '',
      zip: '',
    },
    paymentInfo: {
      cardholderName: '',
      cardNumber: '',
      expireDate: '',
      securityCode: '',
    },
  },
  reducers: {
    setShippingInfo(state, action) {
      state.userInfo = action.payload;
    },
    setBillingInfo(state, action) {
      state.billingInfo = action.payload;
    },
    setPaymentInfo(state, action) {
      state.paymentInfo = action.payload;
    },
  },
  extraReducers: {},
});

export const { setShippingInfo, setBillingInfo, setPaymentInfo } = checkoutSlice.actions;

export default checkoutSlice.reducer;
