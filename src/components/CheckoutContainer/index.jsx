import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';

import Container from '../Container';
import BreadCrumbs from '../BreadCrumbs';
import ShippingForm from '../Form/ShippingForm';
import BillingForm from '../Form/BillingForm';
import PaymentForm from '../Form/PaymentForm';
import CompletedOrder from '../Form/CompletedOrder';
import OrderSummary from '../OrderSummary';

import usePosition from '../../hooks/usePosition';
import { setUserLocation } from '../../redux/checkoutSlice';

import classes from './index.module.scss';

export default function CheckoutContainer() {
  const dispatch = useDispatch();
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(setUserLocation({ latitude, longitude }));
    }
  }, [latitude, longitude]);

  return (
    <Container>
      <section className={classes.checkout_container}>
        <div className={classes.right}>
          <BreadCrumbs />
          <Route exact path="/" component={ShippingForm} />
          <Route path="/billing" component={BillingForm} />
          <Route path="/payment" component={PaymentForm} />
          <Route path="/completed-order" component={CompletedOrder} />
        </div>
        <div className={classes.left}>
          <OrderSummary />
        </div>
      </section>
    </Container>
  );
}
