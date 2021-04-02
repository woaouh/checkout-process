import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';
import Input from '../../UI/Input';
import AddressForm from '../AddressForm';

import { mapObjectAndSetValues } from '../../../helpers';
import { billingSchema } from '../../../helpers/validation';

import classes from './index.module.scss';

export default function BillingForm({ onSubmit }) {
  const { userInfo } = useSelector(({ checkout }) => checkout);
  const {
    register, handleSubmit, setValue, errors,
  } = useForm({ defaultValues: userInfo.billing, resolver: yupResolver(billingSchema) });

  const onSameAsShippingClick = () => mapObjectAndSetValues(userInfo.shipping, setValue);

  const onValueChange = ({ target }) => setValue(target.name, target.value);

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
        message={errors.name?.message && errors.name?.message}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email Address"
        register={register}
        onChange={onValueChange}
        message={errors.email?.message && errors.email?.message}
      />
      <p className={classes.label}>Billing Address</p>
      <AddressForm
        register={register}
        errors={errors}
        onChange={onValueChange}
        setValue={setValue}
      />
      <Button type="submit">Continue</Button>
    </form>
  );
}

BillingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
