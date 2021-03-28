import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Route } from 'react-router';

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
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(fetchGeocodedLocation());
  }, []);

  return (
    <Container>
      <section className={classes.checkout_container}>
        <div className={classes.right}>
          <BreadCrumbs />
          <Route exact path="/">
            <ShippingForm register={register} handleSubmit={handleSubmit} />
          </Route>
          <Route path="/billing">
            <BillingForm register={register} handleSubmit={handleSubmit} />
          </Route>
          <Route path="/payment">
            <PaymentForm register={register} handleSubmit={handleSubmit} />
          </Route>
          <Route path="/completed-order">
            <CompletedOrder />
          </Route>
        </div>
        <div className={classes.left}>
          <OrderSummary />
        </div>
      </section>
    </Container>
  );
}
