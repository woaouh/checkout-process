import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import classes from './index.module.scss';

import COUNTRIES from '../../../assets/countries';
import { setShippingInfo } from '../../../redux/checkoutSlice';

export default function ShippingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  function onSubmitHandler(data) {
    dispatch(setShippingInfo(data));

    history.push('/billing');
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Shipping Info</h2>
      <p className={classes.label}>Recipient</p>
      <Input type="text" name="name" placeholder="Full Name" register={register} required />
      <div className={classes.phone_container}>
        <Input type="tel" name="phone" placeholder="Daytime Phone" register={register} required />
        <p>
          For delivery
          <br />
          questions only
        </p>
      </div>
      <p className={classes.label}>Address</p>
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
