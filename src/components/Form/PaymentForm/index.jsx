import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';
import Input from '../../UI/Input';

import { ReactComponent as Lock } from '../../../assets/svg/lock.svg';

import { paymentSchema } from '../../../helpers/validation';
import { getErrorMessage } from '../../../helpers';

import classes from './index.module.scss';

export default function PaymentForm({ onSubmit }) {
  const { userInfo } = useSelector(({ checkout }) => checkout);
  const {
    register, handleSubmit, setValue, errors,
  } = useForm({ defaultValues: userInfo.payment, resolver: yupResolver(paymentSchema) });

  const onValueChange = ({ target }) => setValue(target.name, target.value);

  const renderInput = (type, name, label, placeholder) => (
    <>
      <p className={classes.label}>{label}</p>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        register={register}
        onChange={onValueChange}
        message={getErrorMessage(errors, name)}
      />
    </>
  );

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Payment</h2>
      <div className={classes.subtitle_container}>
        <Lock />
        <p>This is a secure 128-bit SSL encrypted payment</p>
      </div>
      {renderInput('text', 'cc-name', 'Cardholder Name', 'Name as it appears on your card')}
      {renderInput('number', 'cc-number', 'Cardholder Number', 'XXXX XXXX XXXX XXXX XXXX')}
      <div className={classes.input_container}>
        <div>{renderInput('text', 'cc-exp', 'Expire Date', 'MM / YY')}</div>
        <div>{renderInput('number', 'cc-csc', 'Security Cod', '')}</div>
      </div>
      <Button type="submit">Pay Securely</Button>
    </form>
  );
}

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
