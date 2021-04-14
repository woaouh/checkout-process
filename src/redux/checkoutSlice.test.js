import store from './store';
import { setActiveStep, setUserInfo } from './checkoutSlice';

const mockUserInfo = {
  name: 'test-name',
  phone: 'test-phone',
  address: 'test-address',
  apartment: 'test-apartment',
  city: 'test-city',
  country: 'test-country',
  zip: 'test-zip',
};

describe('Checkout Slice: ', () => {
  beforeEach(() => {
    store.dispatch(setActiveStep(0));
  });

  test('Set Active Step action works correctly', () => {
    store.dispatch(setActiveStep(2));
    const activeStep = store.getState().checkout.activeStep;
    expect(activeStep).toBe(2);
  });

  test('Set User Info action works correctly', () => {
    const activeStep = store.getState().checkout.activeStep;
    expect(activeStep).toBe(0);

    store.dispatch(setUserInfo(mockUserInfo));

    const userInfoAfterDispatch = store.getState().checkout.userInfo.shipping;
    const activeStepAfterDispatch = store.getState().checkout.activeStep;

    expect(userInfoAfterDispatch).toEqual(mockUserInfo);
    expect(activeStepAfterDispatch).toBe(1);
  });
});
