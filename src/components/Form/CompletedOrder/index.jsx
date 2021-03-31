import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../../UI/Button';

import classes from './index.module.scss';

export default function CompletedOrder() {
  const { email } = useSelector(({ checkout }) => checkout.userInfo.billing);

  return (
    <div className={classes.completed_order}>
      <p className={classes.title}>Thank you for your order!</p>
      <p className={classes.orderNumber}>Your order number is: 188787788</p>
      <p className={classes.email}>
        Your will recieve an email confirmation shortly to
        {' '}
        <span>{email}</span>
      </p>
      <p>
        Estimated delivery Day is
        {' '}
        <span className={classes.date}>Friday 1st April 2016</span>
      </p>
      <Button type="button" simple>Print Recipe</Button>
    </div>
  );
}
