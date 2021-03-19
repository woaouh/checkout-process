import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import styles from './index.module.sass';

export default function PaymentForm({ register }) {
  return (
    <div className={styles.formContainer}>
      <h2>Payment</h2>
      <p>This is a secure 128-bit SSL encrypted payment</p>
      <p className={styles.label}>Cardholder Name</p>
      <Input type="text" name="card.cc-name" placeholder="Name as it appears on your card" register={register} required />
      <p className={styles.label}>Card Number</p>
      <Input type="number" name="card.cc-number" placeholder="XXXX XXXX XXXX XXXX XXXX" register={register} required />
      <div className={styles.inputContainer}>
        <div>
          <p className={styles.label}>Expire Date</p>
          <Input type="number" name="card.cc-exp" placeholder="MM / YY" register={register} required />
        </div>
        <div>
          <p className={styles.label}>Security Code</p>
          <Input type="number" name="card.cc-csc" placeholder="" register={register} required />
        </div>
      </div>
      <Button type="submit">Pay Securely</Button>
    </div>
  );
}

PaymentForm.propTypes = {
  register: PropTypes.func.isRequired,
};
