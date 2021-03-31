import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';
import Input from '../../UI/Input';

import { ReactComponent as Lock } from '../../../assets/svg/lock.svg';

import classes from './index.module.scss';

export default function PaymentForm({ onSubmit }) {
  const { paymentInfo } = useSelector(({ checkout }) => checkout);
  const { register, handleSubmit, setValue } = useForm({ defaultValues: paymentInfo });

  function onValueChange({ target }) {
    setValue(target.name, target.value);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Payment</h2>
      <div className={classes.subtitle_container}>
        <Lock />
        <p>This is a secure 128-bit SSL encrypted payment</p>
      </div>
      <p className={classes.label}>Cardholder Name</p>
      <Input
        type="text"
        name="cc-name"
        placeholder="Name as it appears on your card"
        register={register}
        onChange={onValueChange}
        required
      />
      <p className={classes.label}>Card Number</p>
      <Input
        type="number"
        name="cc-number"
        placeholder="XXXX XXXX XXXX XXXX XXXX"
        register={register}
        onChange={onValueChange}
        required
      />
      <div className={classes.input_container}>
        <div>
          <p className={classes.label}>Expire Date</p>
          <Input
            type="number"
            name="cc-exp"
            placeholder="MM / YY"
            register={register}
            onChange={onValueChange}
            required
          />
        </div>
        <div>
          <p className={classes.label}>Security Code</p>
          <Input
            type="number"
            name="cc-csc"
            placeholder=""
            register={register}
            onChange={onValueChange}
            required
          />
        </div>
      </div>
      <Button type="submit">Pay Securely</Button>
    </form>
  );
}

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
