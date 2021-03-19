import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import styles from './index.module.sass';

import COUNTRIES from '../../../assets/countries';

export default function ShippingForm({ handler, register }) {
  return (
    <div className={styles.formContainer}>
      <h2>Shipping Info</h2>
      <p className={styles.label}>Recipient</p>
      <Input type="text" name="user.name" placeholder="Full Name" register={register} required />
      <div className={styles.phoneContainer}>
        <Input type="tel" name="user.phone" placeholder="Daytime Phone" register={register} required />
        <p>
          For delivery
          <br />
          questions only
        </p>
      </div>
      <p className={styles.label}>Address</p>
      <Input type="text" name="user.address" placeholder="Street Address" register={register} required />
      <Input type="text" name="user.apartment" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" register={register} required />
      <Input type="text" name="user.city" placeholder="City" register={register} required />
      <div className={styles.inputContainer}>
        <Select name="user.country" options={COUNTRIES} register={register} required />
        <Input type="number" name="user.zip" placeholder="ZIP" register={register} required />
      </div>
      <Button type="button" handler={handler}>Continue</Button>
    </div>
  );
}

ShippingForm.propTypes = {
  handler: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};
