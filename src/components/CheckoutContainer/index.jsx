import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router';

import Container from '../Container';
import BreadCrumbs from '../BreadCrumbs';
import ShippingForm from '../Form/ShippingForm';
import BillingForm from '../Form/BillingForm';
import PaymentForm from '../Form/PaymentForm';
import CompletedOrder from '../Form/CompletedOrder';
import OrderSummary from '../OrderSummary';

import {
  fetchGeocodedLocation, setBillingInfo, setPaymentInfo, setShippingInfo,
} from '../../redux/checkoutSlice';
import { isObjectKeysFalse } from '../../helpers';

import classes from './index.module.scss';

const steps = {
  0: '/',
  1: '/billing',
  2: '/payment',
  3: '/completed-order',
};

export default function CheckoutContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { shippingInfo, billingInfo } = useSelector(({ checkout }) => checkout);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    dispatch(fetchGeocodedLocation());
  }, []);

  function completeStep(setInfo, data, step) {
    dispatch(setInfo(data));
    setActiveStep((cur) => cur + 1);
    history.push(step);
  }

  function onSubmitHandler(data) {
    switch (activeStep) {
      case 0:
        completeStep(setShippingInfo, data, steps[1]);
        break;
      case 1:
        completeStep(setBillingInfo, data, steps[2]);
        break;
      case 2:
        completeStep(setPaymentInfo, data, steps[3]);
        break;
      default:
        break;
    }
  }

  function renderRoute(previousFormValues, component, step) {
    // if previous form has not been filled then redirect to step:
    if (isObjectKeysFalse(previousFormValues)) {
      return <Redirect to={step} />;
    }

    return component;
  }

  return (
    <Container>
      <section className={classes.checkout_container}>
        <div className={classes.right}>
          <BreadCrumbs activeStep={activeStep} />
          <Route exact path={steps[0]}>
            <ShippingForm onSubmitHandler={onSubmitHandler} />
          </Route>
          <Route path={steps[1]}>
            {renderRoute(shippingInfo, <BillingForm onSubmitHandler={onSubmitHandler} />, steps[0])}
          </Route>
          <Route path={steps[2]}>
            {renderRoute(billingInfo, <PaymentForm onSubmitHandler={onSubmitHandler} />, steps[1])}
          </Route>
          <Route path={steps[3]}>
            {renderRoute(billingInfo, <CompletedOrder />, steps[0])}
          </Route>
        </div>
        <div className={classes.left}>
          <OrderSummary />
        </div>
      </section>
    </Container>
  );
}
