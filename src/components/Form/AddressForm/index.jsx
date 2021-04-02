import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import Toast from '../../UI/Toast';
import Loader from '../../UI/Loader';

import { ReactComponent as Geo } from '../../../assets/svg/geolocation.svg';
import COUNTRIES from '../../../assets/countries';

import classes from './index.module.scss';
import { mapObjectAndSetValues } from '../../../helpers';

export default function AddressForm({
  register, errors, onChange, setValue,
}) {
  const { status, error, geolocation } = useSelector(({ checkout }) => checkout);

  const onGeoButtonClick = () => {
    if (status === 'succeeded') mapObjectAndSetValues(geolocation, setValue);
    if (error) toast.error(error);
  };

  return (
    <div className={classes.address_container}>
      <Input
        type="text"
        name="address"
        placeholder="Street Address"
        register={register}
        onChange={onChange}
        message={errors.address?.message && errors.address?.message}
      />
      <Input
        type="text"
        name="apartment"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
        register={register}
        onChange={onChange}
      />
      <div className={classes.geo_container}>
        <div className={classes.geo_btn_container}>
          {status === 'loading' && <Loader />}
          <Button onClick={onGeoButtonClick} geo>
            <Geo />
          </Button>
        </div>
        <Input
          type="text"
          name="city"
          placeholder="City"
          register={register}
          onChange={onChange}
          message={errors.city?.message && errors.city?.message}
        />
      </div>
      <div className={classes.input_container}>
        <Select
          name="country"
          options={COUNTRIES}
          register={register}
          onChange={onChange}
          message={errors.country?.message && errors.country?.message}
        />
        <Input
          type="number"
          name="postcode"
          placeholder="ZIP"
          register={register}
          onChange={onChange}
          message={errors.postcode?.message && errors.postcode?.message}
        />
      </div>
      {error && <Toast />}
    </div>
  );
}

AddressForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
