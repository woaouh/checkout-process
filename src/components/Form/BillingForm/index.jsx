import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import classes from './index.module.scss';

import COUNTRIES from '../../../assets/countries';
import { setBillingInfo } from '../../../redux/checkoutSlice';

export default function BillingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  function onSubmitHandler(data) {
    dispatch(setBillingInfo(data));

    history.push('/payment');
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={classes.title_container}>
        <h2>Billing Information</h2>
        <button type="button">Same as shipping</button>
      </div>
      <p className={classes.label}>Billing Contact</p>
      <Input type="text" name="name" placeholder="Full Name" register={register} required />
      <Input type="email" name="email" placeholder="Email Address" register={register} required />
      <p className={classes.label}>Billing Address</p>
      <Input type="text" name="address" placeholder="Street Address" register={register} required />
      <Input type="text" name="apartment" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" register={register} required />
      <Input type="text" name="city" placeholder="City" register={register} required />
      <div className={classes.input_container}>
        <Select name="country" options={COUNTRIES} register={register} required />
        <Input type="number" name="zip" placeholder="ZIP" register={register} required />
      </div>
      <Button type="submit">Continue</Button>
    </form>
  );
}
