import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import styles from './index.module.sass';

import { setShippingInfo } from '../../redux/checkoutSlice';
import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import PaymentForm from './PaymentForm';
import CompletedOrder from './CompletedOrder';

export default function Form() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [step, setStep] = useState(0);

  function completeStep() {
    setStep((cur) => cur + 1);
  }

  function onClickHandler() {
    completeStep();
  }

  function onSubmitHandler(data) {
    dispatch(setShippingInfo(data));
    completeStep();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>

      {step >= 0 && (
        <div style={step !== 0 ? { display: 'none' } : { display: 'block' }}>
          <ShippingForm handler={onClickHandler} register={register} />
        </div>
      )}

      {step >= 1 && (
        <div style={step !== 1 ? { display: 'none' } : { display: 'block' }}>
          <BillingForm handler={onClickHandler} register={register} />
        </div>
      )}

      {step === 2 && (
        <div style={step !== 2 ? { display: 'none' } : { display: 'block' }}>
          <PaymentForm register={register} />
        </div>
      )}

      {step === 3 && (
        <CompletedOrder />
      )}

    </form>
  );
}
