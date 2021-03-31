import React from 'react';
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
  setBillingInfo, setPaymentInfo, setShippingInfo, setActiveStep,
} from '../../redux/checkoutSlice';
import { isObjectKeysFalse } from '../../helpers';

import classes from './index.module.scss';

const steps = [
  {
    step: 0, name: 'Shipping', path: '/', exact: true,
  },
  {
    step: 1, name: 'Billing', path: '/billing', exact: false,
  },
  {
    step: 2, name: 'Payment', path: '/payment', exact: false,
  },
  {
    step: 3, name: 'Completed Order', path: '/completed-order', exact: false,
  },
];

export default function CheckoutContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { shippingInfo, billingInfo, activeStep } = useSelector(({ checkout }) => checkout);

  function completeStep(setInfo, data, path) {
    dispatch(setInfo(data));
    dispatch(setActiveStep(activeStep + 1));
    history.push(path);
  }

  function onFormSubmit(data) {
    switch (activeStep) {
      case 0:
        completeStep(setShippingInfo, data, steps[1].path);
        break;
      case 1:
        completeStep(setBillingInfo, data, steps[2].path);
        break;
      case 2:
        completeStep(setPaymentInfo, data, steps[3].path);
        break;
      default:
        break;
    }
  }

  function renderRoute(previousFormValues, component, path) {
    // if previous form has not been filled then redirect to step:
    if (isObjectKeysFalse(previousFormValues)) {
      return <Redirect to={path} />;
    }
    return component;
  }

  return (
    <Container>
      <section className={classes.checkout_container}>

        <div className={classes.right}>
          <BreadCrumbs steps={steps.slice(0, -1)} />
          <Route exact path={steps[0].path}>
            <ShippingForm onSubmit={onFormSubmit} />
          </Route>
          <Route path={steps[1].path}>
            {renderRoute(shippingInfo, <BillingForm onSubmit={onFormSubmit} />, steps[0].path)}
          </Route>
          <Route path={steps[2].path}>
            {renderRoute(billingInfo, <PaymentForm onSubmit={onFormSubmit} />, steps[1].path)}
          </Route>
          <Route path={steps[3].path}>
            {renderRoute(billingInfo, <CompletedOrder />, steps[0].path)}
          </Route>
        </div>

        <div className={classes.left}>
          <OrderSummary />
        </div>
      </section>
    </Container>
  );
}
