import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';

import COUNTRIES from '../../../assets/countries';
import { setBillingInfo } from '../../../redux/checkoutSlice';

import classes from './index.module.scss';

export default function BillingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const shippingInfo = useSelector(({ checkout }) => checkout.shippingInfo);
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    country: '',
    zip: '',
  });

  function onSubmitHandler(data) {
    dispatch(setBillingInfo(data));

    history.push('/payment');
  }

  function onClickHandler() {
    setFormValues(shippingInfo);
  }

  function onChangeHandler({ target }) {
    setFormValues({ ...formValues, [target.name]: target.value });
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={classes.title_container}>
        <h2>Billing Information</h2>
        <Button handler={onClickHandler} simple>Same as shipping</Button>
      </div>
      <p className={classes.label}>Billing Contact</p>
      <Input type="text" name="name" placeholder="Full Name" register={register} handler={onChangeHandler} value={formValues.name} required />
      <Input type="email" name="email" placeholder="Email Address" register={register} required />
      <p className={classes.label}>Billing Address</p>
      <Input type="text" name="address" placeholder="Street Address" register={register} handler={onChangeHandler} value={formValues.address} required />
      <Input type="text" name="apartment" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" register={register} handler={onChangeHandler} value={formValues.apartment} required />
      <Input type="text" name="city" placeholder="City" register={register} handler={onChangeHandler} value={formValues.city} required />
      <div className={classes.input_container}>
        <Select name="country" options={COUNTRIES} register={register} handler={onChangeHandler} value={formValues.country} required />
        <Input type="number" name="zip" placeholder="ZIP" register={register} handler={onChangeHandler} value={formValues.zip} required />
      </div>
      <Button type="submit">Continue</Button>
    </form>
  );
}
