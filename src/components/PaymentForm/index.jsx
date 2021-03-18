import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import Button from '../UI/Button';
import Input from '../UI/Input';
import styles from './index.module.sass';

import { setPaymentInfo } from '../../redux/checkoutSlice';

export default function PaymentForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  function onSubmitHandler(data) {
    dispatch(setPaymentInfo(data));

    history.push('/completed-order');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Payment</h2>
      <p>This is a secure 128-bit SSL encrypted payment</p>
      <p className={styles.label}>Cardholder Name</p>
      <Input type="text" name="name" placeholder="Name as it appears on your card" register={register} required />
      <p className={styles.label}>Card Number</p>
      <Input type="number" name="card number" placeholder="XXXX XXXX XXXX XXXX XXXX" register={register} required />
      <div className={styles.inputContainer}>
        <div>
          <p className={styles.label}>Expire Date</p>
          <Input type="number" name="expire date" placeholder="MM / YY" register={register} required />
        </div>
        <div>
          <p className={styles.label}>Security Code</p>
          <Input type="number" name="security code" placeholder="" register={register} required />
        </div>
      </div>
      <Button type="submit">Pay Securely</Button>
    </form>
  );
}
