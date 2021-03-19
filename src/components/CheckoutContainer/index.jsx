import React from 'react';
import { Route } from 'react-router';
import Container from '../Container';
import BreadCrumbs from '../BreadCrumbs';
import styles from './index.module.sass';
import ShippingForm from '../Form/ShippingForm';
import BillingForm from '../Form/BillingForm';
import PaymentForm from '../Form/PaymentForm';
import CompletedOrder from '../Form/CompletedOrder';

export default function CheckoutContainer() {
  return (
    <Container>
      <div className={styles.checkoutContainer}>
        <div className={styles.right}>
          <BreadCrumbs />
          <Route exact path="/" component={ShippingForm} />
          <Route path="/billing" component={BillingForm} />
          <Route path="/payment" component={PaymentForm} />
          <Route path="/completed-order" component={CompletedOrder} />
        </div>
        <div className={styles.left}>
          Products
        </div>
      </div>
    </Container>
  );
}
