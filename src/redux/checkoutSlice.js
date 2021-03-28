/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_KEY = '987c520ada79426b8e9e04efefa6a108';
const API_URL = 'https://api.opencagedata.com/geocode/v1/json?q';

export const fetchGeocodedLocation = createAsyncThunk(
  'checkout/fetchGeocodedLocation',
  async ({ latitude, longitude }) => {
    const response = await fetch(`${API_URL}=${latitude}+${longitude}&key=${API_KEY}`);
    const result = await response.json();

    return result;
  },
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
    setGeolocationError(state, action) {
      state.error = action.payload;
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
      } = action.payload.results[0].components;

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
  setShippingInfo, setBillingInfo, setPaymentInfo, setGeolocationError,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
