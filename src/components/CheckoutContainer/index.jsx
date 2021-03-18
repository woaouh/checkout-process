import React from 'react';
import { Route, Switch } from 'react-router';
import Container from '../Container';
import BreadCrumbs from '../BreadCrumbs';
import ShippingForm from '../ShippingForm';
import BillingForm from '../BillingForm';
import PaymentForm from '../PaymentForm';
import styles from './index.module.sass';
import CompletedOrder from '../CompletedOrder';

export default function CheckoutContainer() {
  return (
    <Container>
      <div className={styles.checkoutContainer}>
        <div className={styles.right}>
          <Switch>
            <Route exact path="/">
              <BreadCrumbs />
              <ShippingForm />
            </Route>
            <Route path="/billing">
              <BreadCrumbs />
              <BillingForm />
            </Route>
            <Route path="/payment">
              <BreadCrumbs />
              <PaymentForm />
            </Route>
            <Route path="/completed-order">
              <BreadCrumbs />
              <CompletedOrder />
            </Route>
          </Switch>
        </div>
        <div className={styles.left}>
          Products
        </div>
      </div>
    </Container>
  );
}
