import React from 'react';
import { Route } from 'react-router';
import Container from '../Container';
import BreadCrumbs from '../BreadCrumbs';
import classes from './index.module.scss';
import ShippingForm from '../Form/ShippingForm';
import BillingForm from '../Form/BillingForm';
import PaymentForm from '../Form/PaymentForm';
import CompletedOrder from '../Form/CompletedOrder';
import OrderSummary from '../OrderSummary';

export default function CheckoutContainer() {
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
