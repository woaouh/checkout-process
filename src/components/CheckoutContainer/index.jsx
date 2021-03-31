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

import { setUserInfo } from '../../redux/checkoutSlice';

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
  const { activeStep } = useSelector(({ checkout }) => checkout);

  function onFormSubmit(data) {
    dispatch(setUserInfo(data));
    history.push(steps[activeStep + 1].path);
  }

  function renderRoute(step, component) {
    if (activeStep !== step) {
      return <Redirect to="/" />;
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
            {renderRoute(1, <BillingForm onSubmit={onFormSubmit} />)}
          </Route>
          <Route path={steps[2].path}>
            {renderRoute(2, <PaymentForm onSubmit={onFormSubmit} />)}
          </Route>
          <Route path={steps[3].path}>
            {renderRoute(3, <CompletedOrder />)}
          </Route>
        </div>

        <div className={classes.left}>
          <OrderSummary />
        </div>
      </section>
    </Container>
  );
}
