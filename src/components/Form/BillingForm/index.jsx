import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';
import Input from '../../UI/Input';
import AddressForm from '../AddressForm';
import Toast from '../../UI/Toast';

import { mapObjectAndSetValues } from '../../../helpers';

import classes from './index.module.scss';

export default function BillingForm({ onSubmit }) {
  const {
    status, error, geolocation, userInfo,
  } = useSelector(({ checkout }) => checkout);
  const { register, handleSubmit, setValue } = useForm({ defaultValues: userInfo.billing });

  function onSameAsShippingClick() {
    mapObjectAndSetValues(userInfo.shipping, setValue);
  }

  function onValueChange({ target }) {
    setValue(target.name, target.value);
  }

  function onGeoButtonClick() {
    if (status === 'succeeded') {
      mapObjectAndSetValues(geolocation, setValue);
    }
    if (error) {
      toast.error(error);
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.title_container}>
        <h2>Billing Information</h2>
        <Button onClick={onSameAsShippingClick} simple>Same as shipping</Button>
      </div>
      <p className={classes.label}>Billing Contact</p>
      <Input
        type="text"
        name="name"
        placeholder="Full Name"
        register={register}
        onChange={onValueChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Email Address"
        register={register}
        onChange={onValueChange}
        required
      />
      <p className={classes.label}>Billing Address</p>
      <AddressForm
        register={register}
        onClick={onGeoButtonClick}
        onChange={onValueChange}
      />
      <Button type="submit">Continue</Button>
      {error && <Toast />}
    </form>
  );
}

BillingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
