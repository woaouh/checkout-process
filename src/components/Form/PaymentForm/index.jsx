import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';

import Button from '../../UI/Button';
import Input from '../../UI/Input';

import { ReactComponent as Lock } from '../../../assets/svg/lock.svg';

import { setPaymentInfo } from '../../../redux/checkoutSlice';

import classes from './index.module.scss';

export default function PaymentForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { paymentInfo } = useSelector(({ checkout }) => checkout);
  const [formValues, setFormValues] = useState(paymentInfo);

  function onSubmitHandler(data) {
    dispatch(setPaymentInfo(data));

    history.push('/completed-order');
  }

  function onValueChange({ target }) {
    setFormValues({ ...formValues, [target.name]: target.value });
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
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
        handler={onValueChange}
        value={formValues['cc-name']}
        required
      />
      <p className={classes.label}>Card Number</p>
      <Input
        type="number"
        name="cc-number"
        placeholder="XXXX XXXX XXXX XXXX XXXX"
        register={register}
        handler={onValueChange}
        value={formValues['cc-number']}
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
            handler={onValueChange}
            value={formValues['cc-exp']}
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
            handler={onValueChange}
            value={formValues['cc-csc']}
            required
          />
        </div>
      </div>
      <Button type="submit">Pay Securely</Button>
    </form>
  );
}
