import React from 'react';

import Container from '../Container';
import BreadCrumbs from '../BreadCrumbs';
import Form from '../Form';
import OrderSummary from '../OrderSummary';

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
  return (
    <Container>
      <section className={classes.checkout_container}>
        <div className={classes.right}>
          <BreadCrumbs steps={steps.slice(0, -1)} />
          <Form steps={steps} />
        </div>
        <div className={classes.left}>
          <OrderSummary />
        </div>
      </section>
    </Container>
  );
}
