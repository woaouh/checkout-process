import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import styles from './index.module.sass';

import COUNTRIES from '../../../assets/countries';

export default function BillingForm({ handler, register }) {
  return (
    <div className={styles.formContainer}>
      <div className={styles.titleContainer}>
        <h2>Billing Information</h2>
        <button type="button">Same as shipping</button>
      </div>
      <p className={styles.label}>Billing Contact</p>
      <Input type="text" name="billing.name" placeholder="Full Name" register={register} required />
      <Input type="email" name="billing.email" placeholder="Email Address" register={register} required />
      <p className={styles.label}>billing.Address</p>
      <Input type="text" name="billing.address" placeholder="Street Address" register={register} required />
      <Input type="text" name="billing.apartment" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" register={register} required />
      <Input type="text" name="billing.city" placeholder="City" register={register} required />
      <div className={styles.inputContainer}>
        <Select name="billing.country" options={COUNTRIES} register={register} required />
        <Input type="number" name="billing.zip" placeholder="ZIP" register={register} required />
      </div>
      <Button type="button" handler={handler}>Continue</Button>
    </div>
  );
}

BillingForm.propTypes = {
  handler: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};
