import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.sass';

export default function CompletedOrder() {
  const userEmail = useSelector(({ checkout }) => checkout.userInfo.billing.email);

  return (
    <div className={styles.completedOrder}>
      <p className={styles.title}>Thank you for your order!</p>
      <p className={styles.orderNumber}>Your order number is: 188787788</p>
      <p className={styles.email}>
        Your will recieve an email confirmation shortly to
        {' '}
        <span>{userEmail}</span>
      </p>
      <p>
        Estimated delivery Day is
        {' '}
        <span className={styles.date}>Friday 1st April 2016</span>
      </p>
      <button type="button" className={styles.btn}>Print Recipe</button>
    </div>
  );
}
