import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import styles from './index.module.sass';

import { setShippingInfo, completeStep } from '../../redux/checkoutSlice';
import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import PaymentForm from './PaymentForm';
import CompletedOrder from './CompletedOrder';

export default function Form() {
  const dispatch = useDispatch();
  const activeStep = useSelector(({ checkout }) => checkout.activeStep);
  const { register, handleSubmit } = useForm();

  function onClickHandler() {
    dispatch(completeStep());
  }

  function onSubmitHandler(data) {
    dispatch(setShippingInfo(data));
    dispatch(completeStep());
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>

      {activeStep >= 0 && (
        <div
          className={classNames({
            [styles.hidden]: activeStep !== 0,
          })}
        >
          <ShippingForm handler={onClickHandler} register={register} />
        </div>
      )}

      {activeStep >= 1 && (
        <div
          className={classNames({
            [styles.hidden]: activeStep !== 1,
          })}
        >
          <BillingForm handler={onClickHandler} register={register} />
        </div>
      )}

      {activeStep === 2 && (
        <div
          className={classNames({
            [styles.hidden]: activeStep !== 2,
          })}
        >
          <PaymentForm register={register} />
        </div>
      )}

      {activeStep === 3 && (
        <CompletedOrder />
      )}

    </form>
  );
}
