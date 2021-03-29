import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';
import Input from '../../UI/Input';
import AddressForm from '../AddressForm';

import classes from './index.module.scss';

export default function BillingForm({ onSubmitHandler }) {
  const { register, handleSubmit } = useForm();
  const {
    status, error, geolocation, shippingInfo, billingInfo,
  } = useSelector(({ checkout }) => checkout);
  const [formValues, setFormValues] = useState(billingInfo);

  function onSameAsShippingClick() {
    setFormValues({ ...formValues, ...shippingInfo });
  }

  function onValueChange({ target }) {
    setFormValues({ ...formValues, [target.name]: target.value });
  }

  function onGeoButtonClick() {
    if (status === 'succeeded') {
      setFormValues({
        ...formValues,
        city: geolocation.city,
        country: geolocation.country,
        zip: geolocation.postcode,
      });
    }
    if (error) {
      alert(error);
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={classes.title_container}>
        <h2>Billing Information</h2>
        <Button handler={onSameAsShippingClick} simple>Same as shipping</Button>
      </div>
      <p className={classes.label}>Billing Contact</p>
      <Input
        type="text"
        name="name"
        placeholder="Full Name"
        register={register}
        handler={onValueChange}
        value={formValues.name}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Email Address"
        register={register}
        handler={onValueChange}
        value={formValues.email}
        required
      />
      <p className={classes.label}>Billing Address</p>
      <AddressForm
        register={register}
        formValues={formValues}
        onClickHandler={onGeoButtonClick}
        onChangeHandler={onValueChange}
      />
      <Button type="submit">Continue</Button>
    </form>
  );
}

BillingForm.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};
