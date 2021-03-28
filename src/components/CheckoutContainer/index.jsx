import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

import Container from '../Container';
import BreadCrumbs from '../BreadCrumbs';
import ShippingForm from '../Form/ShippingForm';
import BillingForm from '../Form/BillingForm';
import PaymentForm from '../Form/PaymentForm';
import CompletedOrder from '../Form/CompletedOrder';
import OrderSummary from '../OrderSummary';

import { fetchGeocodedLocation } from '../../redux/checkoutSlice';

import classes from './index.module.scss';

export default function CheckoutContainer() {
  const dispatch = useDispatch();
  const { shippingInfo, billingInfo } = useSelector(({ checkout }) => checkout);

  function isObjKeysEmpty(obj) {
    return Object.keys(obj).every((key) => !obj[key]);
  }

  useEffect(() => {
    dispatch(fetchGeocodedLocation());
  }, []);

  return (
    <Container>
      <section className={classes.checkout_container}>
        <div className={classes.right}>
          <BreadCrumbs />
          <Route exact path="/">
            <ShippingForm />
          </Route>
          <Route path="/billing">
            {isObjKeysEmpty(shippingInfo) ? (
              <Redirect to="/" />
            ) : (
              <BillingForm />
            )}
          </Route>
          <Route path="/payment">
            {isObjKeysEmpty(billingInfo) ? (
              <Redirect to="/billing" />
            ) : (
              <PaymentForm />
            )}
          </Route>
          <Route path="/completed-order">
            {isObjKeysEmpty(billingInfo) ? (
              <Redirect to="/" />
            ) : (
              <CompletedOrder />
            )}
          </Route>
        </div>
        <div className={classes.left}>
          <OrderSummary />
        </div>
      </section>
    </Container>
  );
}
