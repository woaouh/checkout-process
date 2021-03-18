import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Select from '../UI/Select';
import styles from './index.module.sass';

import { setShippingInfo } from '../../redux/checkoutSlice';
import COUNTRIES from '../../assets/countries';

export default function ShippingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  function onSubmitHandler(data) {
    dispatch(setShippingInfo(data));

    history.push('/billing');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Shipping Info</h2>
      <p className={styles.label}>Recipient</p>
      <Input type="text" name="name" placeholder="Full Name" register={register} required />
      <Input type="tel" name="phone" placeholder="Daytime Phone" register={register} required />
      <p className={styles.label}>Address</p>
      <Input type="text" name="address" placeholder="Street Address" register={register} required />
      <Input type="text" name="apartment" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" register={register} required />
      <Input type="text" name="city" placeholder="City" register={register} required />
      <div className={styles.inputContainer}>
        <Select name="country" options={COUNTRIES} register={register} required />
        <Input type="number" name="zip" placeholder="Zip" register={register} required />
      </div>
      <Button type="submit">Continue</Button>
    </form>
  );
}
