import React from 'react';
import Container from '../Container';
import BreadCrumbs from '../BreadCrumbs';
import Form from '../Form';
import styles from './index.module.sass';

export default function CheckoutContainer() {
  return (
    <Container>
      <div className={styles.checkoutContainer}>
        <div className={styles.right}>
          <BreadCrumbs />
          <Form />
        </div>
        <div className={styles.left}>
          Products
        </div>
      </div>
    </Container>
  );
}
