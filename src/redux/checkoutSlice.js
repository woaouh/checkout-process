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
    formStages: ['shipping', 'billing', 'payment'],
    userInfo: {
      shipping: {
        name: '',
        phone: '',
        address: '',
        apartment: '',
        city: '',
        country: '',
        zip: '',
      },
      billing: {
        name: '',
        email: '',
        address: '',
        apartment: '',
        city: '',
        country: '',
        zip: '',
      },
      payment: {
        'cc-name': '',
        'cc-number': '',
        'cc-exp': '',
        'cc-csc': '',
      },
    },
    geolocation: {
      address: '',
      apartment: '',
      city: '',
      country: '',
      postcode: '',
    },
    status: 'idle',
    error: null,
    activeStep: 0,
  },
  reducers: {
    setActiveStep: (state, action) => { state.activeStep = action.payload; },
    setUserInfo: (state, action) => {
      const activeStage = state.formStages[state.activeStep];
      state.userInfo[activeStage] = action.payload;
      state.activeStep += 1;
    },
  },
  extraReducers: {
    [fetchGeocodedLocation.pending]: (state) => { state.status = 'loading'; },
    [fetchGeocodedLocation.fulfilled]: (state, action) => {
      state.status = 'succeeded';

      const {
        road, house_number, city, country, postcode,
      } = action.payload;

      state.geolocation = {
        address: road, apartment: house_number, city, country, postcode,
      };
    },
    [fetchGeocodedLocation.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { setActiveStep, setUserInfo } = checkoutSlice.actions;

export default checkoutSlice.reducer;
