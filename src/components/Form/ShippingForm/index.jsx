import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';
import Input from '../../UI/Input';
import AddressForm from '../AddressForm';
import Toast from '../../UI/Toast';

import { mapObjectAndSetValues } from '../../../helpers';
import { shippingSchema } from '../../../helpers/validation';

import classes from './index.module.scss';

export default function ShippingForm({ onSubmit }) {
  const {
    status, error, geolocation, userInfo,
  } = useSelector(({ checkout }) => checkout);
  const {
    register, handleSubmit, setValue, errors,
  } = useForm({ defaultValues: userInfo.shipping, resolver: yupResolver(shippingSchema) });

  useEffect(() => mapObjectAndSetValues(geolocation, setValue), [status]);

  const onValueChange = ({ target }) => setValue(target.name, target.value);

  const onGeoButtonClick = () => {
    if (status === 'succeeded') mapObjectAndSetValues(geolocation, setValue);
    if (error) toast.error(error);
  };

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
        message={errors.name?.message && errors.name?.message}
      />
      <div className={classes.phone_container}>
        <Input
          type="tel"
          name="phone"
          placeholder="Daytime Phone"
          register={register}
          onChange={onValueChange}
          message={errors.phone?.message && errors.phone?.message}
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
        errors={errors}
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
