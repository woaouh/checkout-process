import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router';
import PropTypes from 'prop-types';

import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import PaymentForm from './PaymentForm';
import CompletedOrder from './CompletedOrder';

import { setUserInfo } from '../../redux/checkoutSlice';

export default function Form({ steps }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { activeStep } = useSelector(({ checkout }) => checkout);

  function onFormSubmit(data) {
    dispatch(setUserInfo(data));
    history.push(steps[activeStep + 1].path);
  }

  function renderRoute(step, component) {
    return (
      <Route key={step} path={steps[step].path}>
        {activeStep !== step ? <Redirect to="/" /> : component}
      </Route>
    );
  }

  const formSteps = [
    <ShippingForm onSubmit={onFormSubmit} />,
    <BillingForm onSubmit={onFormSubmit} />,
    <PaymentForm onSubmit={onFormSubmit} />,
    <CompletedOrder />,
  ];

  return formSteps.map((component, i) => renderRoute(i, component));
}

Form.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};
