import React, { useEffect } from 'react';
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

export default function ShippingForm({ onSubmit }) {
  const {
    status, error, geolocation, userInfo,
  } = useSelector(({ checkout }) => checkout);
  const { register, handleSubmit, setValue } = useForm({ defaultValues: userInfo.shipping });

  useEffect(() => {
    if (status === 'succeeded') {
      mapObjectAndSetValues(geolocation, setValue);
    }
  }, [status]);

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
      <h2>Shipping Info</h2>
      <p className={classes.label}>Recipient</p>
      <Input
        type="text"
        name="name"
        placeholder="Full Name"
        register={register}
        onChange={onValueChange}
        required
      />
      <div className={classes.phone_container}>
        <Input
          type="tel"
          name="phone"
          placeholder="Daytime Phone"
          register={register}
          onChange={onValueChange}
          required
        />
        <p>
          For delivery
          <br />
          questions only
        </p>
      </div>
      <p className={classes.label}>Address</p>
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

ShippingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
