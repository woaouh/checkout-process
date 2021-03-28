import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';
import Input from '../../UI/Input';

import { ReactComponent as Lock } from '../../../assets/svg/lock.svg';

import { setPaymentInfo } from '../../../redux/checkoutSlice';

import classes from './index.module.scss';

export default function PaymentForm({ register, handleSubmit }) {
  const dispatch = useDispatch();
  const history = useHistory();

  function onSubmitHandler(data) {
    dispatch(setPaymentInfo(data));

    history.push('/completed-order');
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Payment</h2>
      <div className={classes.subtitle_container}>
        <Lock />
        <p>This is a secure 128-bit SSL encrypted payment</p>
      </div>
      <p className={classes.label}>Cardholder Name</p>
      <Input type="text" name="cc-name" placeholder="Name as it appears on your card" register={register} required />
      <p className={classes.label}>Card Number</p>
      <Input type="number" name="cc-number" placeholder="XXXX XXXX XXXX XXXX XXXX" register={register} required />
      <div className={classes.input_container}>
        <div>
          <p className={classes.label}>Expire Date</p>
          <Input type="number" name="cc-exp" placeholder="MM / YY" register={register} required />
        </div>
        <div>
          <p className={classes.label}>Security Code</p>
          <Input type="number" name="cc-csc" placeholder="" register={register} required />
        </div>
      </div>
      <Button type="submit">Pay Securely</Button>
    </form>
  );
}

PaymentForm.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
