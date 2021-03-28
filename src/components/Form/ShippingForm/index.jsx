import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import Loader from '../../UI/Loader';

import { ReactComponent as Geo } from '../../../assets/svg/geolocation.svg';
import COUNTRIES from '../../../assets/countries';

import { setShippingInfo } from '../../../redux/checkoutSlice';

import classes from './index.module.scss';

export default function ShippingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { status, error, geolocation } = useSelector(({ checkout }) => checkout);
  const [showLoader, setShowLoader] = useState(false);
  const [formValues, setFormValues] = useState({
    city: '',
    country: '',
    zip: '',
  });

  useEffect(() => {
    if (status === 'succeeded' || status === 'failed' || error) {
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

  function onSubmitHandler(data) {
    dispatch(setShippingInfo(data));

    history.push('/billing');
  }

  function onChangeHandler({ target }) {
    setFormValues({ ...formValues, [target.name]: target.value });
  }

  function onClickHandler() {
    if (status !== 'succeeded' && status !== 'failed' && !error) {
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
      <Input type="text" name="name" placeholder="Full Name" register={register} required />
      <div className={classes.phone_container}>
        <Input type="tel" name="phone" placeholder="Daytime Phone" register={register} required />
        <p>
          For delivery
          <br />
          questions only
        </p>
      </div>
      <p className={classes.label}>Address</p>
      <Input type="text" name="address" placeholder="Street Address" register={register} required />
      <Input type="text" name="apartment" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" register={register} required />
      <div className={classes.geo_container}>
        <Button handler={onClickHandler} geo>
          <Geo />
        </Button>
        <Input type="text" name="city" placeholder="City" register={register} handler={onChangeHandler} value={formValues.city} required />
      </div>
      <div className={classes.input_container}>
        <Select name="country" options={COUNTRIES} register={register} handler={onChangeHandler} value={formValues.country} required />
        <Input type="number" name="zip" placeholder="ZIP" register={register} handler={onChangeHandler} value={formValues.zip} required />
      </div>
      <Button type="submit">Continue</Button>
    </form>
  );
}
