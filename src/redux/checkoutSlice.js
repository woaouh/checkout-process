/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    shippingInfo: {
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
      address: '',
      apartment: '',
      city: '',
      country: '',
      zip: '',
    },
    paymentInfo: {
      'cc-name': '',
      'cc-number': '',
      'cc-exp': '',
      'cc-csc': '',
    },
    userLocation: {
      longitude: 0,
      latitude: 0,
    },
  },
  reducers: {
    setShippingInfo(state, action) {
      state.shippingInfo = action.payload;
    },
    setBillingInfo(state, action) {
      state.billingInfo = action.payload;
    },
    setPaymentInfo(state, action) {
      state.paymentInfo = action.payload;
    },
    setUserLocation(state, action) {
      state.userLocation = action.payload;
    },
  },
});

export const {
  setShippingInfo, setBillingInfo, setPaymentInfo, setUserLocation,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
