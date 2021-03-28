/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getLocation from '../helpers/geolocation';

const API_KEY = '987c520ada79426b8e9e04efefa6a108';
const API_URL = 'https://api.opencagedata.com/geocode/v1/json?q';

export const fetchGeocodedLocation = createAsyncThunk(
  'checkout/fetchGeocodedLocation',
  async () => getLocation
    .then((pos) => fetch(`${API_URL}=${pos.latitude}+${pos.longitude}&key=${API_KEY}`))
    .then((response) => response.json())
    .then((data) => data.results[0].components),
);

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
    geolocation: '',
    status: 'idle',
    error: null,
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
  },
  extraReducers: {
    [fetchGeocodedLocation.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchGeocodedLocation.fulfilled]: (state, action) => {
      state.status = 'succeeded';

      const {
        road, house_number, city, country, postcode,
      } = action.payload;

      state.geolocation = {
        road, house_number, city, country, postcode,
      };
    },
    [fetchGeocodedLocation.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const {
  setShippingInfo, setBillingInfo, setPaymentInfo,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
