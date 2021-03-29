import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Loader from '../../UI/Loader';
import AddressForm from '../AddressForm';

import classes from './index.module.scss';

export default function ShippingForm({ onSubmitHandler }) {
  const { register, handleSubmit } = useForm();
  const {
    status, error, geolocation, shippingInfo,
  } = useSelector(({ checkout }) => checkout);
  const [showLoader, setShowLoader] = useState(false);
  const [formValues, setFormValues] = useState(shippingInfo);

  useEffect(() => {
    if (status !== 'loading') {
      setShowLoader(false);
    }

    if (status === 'succeeded') {
      setFormValues({
        ...formValues,
        city: geolocation.city,
        country: geolocation.country,
        zip: geolocation.postcode,
      });
    }
  }, [status, error]);

  function onValueChange({ target }) {
    setFormValues({ ...formValues, [target.name]: target.value });
  }

  function onGeoButtonClick() {
    if (status === 'loading') {
      setShowLoader(true);
    }

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
      {showLoader && <Loader />}
      <h2>Shipping Info</h2>
      <p className={classes.label}>Recipient</p>
      <Input
        type="text"
        name="name"
        placeholder="Full Name"
        register={register}
        value={formValues.name}
        handler={onValueChange}
        required
      />
      <div className={classes.phone_container}>
        <Input
          type="tel"
          name="phone"
          placeholder="Daytime Phone"
          register={register}
          value={formValues.phone}
          handler={onValueChange}
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
        formValues={formValues}
        onClickHandler={onGeoButtonClick}
        onChangeHandler={onValueChange}
      />
      <Button type="submit">Continue</Button>
    </form>
  );
}

ShippingForm.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};
