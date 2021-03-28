import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';

import { ReactComponent as Geo } from '../../../assets/svg/geolocation.svg';
import COUNTRIES from '../../../assets/countries';

import classes from './index.module.scss';

export default function AddressForm({
  register, formValues, onClickHandler, onChangeHandler,
}) {
  return (
    <>
      <Input
        type="text"
        name="address"
        placeholder="Street Address"
        register={register}
        handler={onChangeHandler}
        value={formValues.address}
        required
      />
      <Input
        type="text"
        name="apartment"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
        register={register}
        handler={onChangeHandler}
        value={formValues.apartment}
        required
      />
      <div className={classes.geo_container}>
        <Button handler={onClickHandler} geo>
          <Geo />
        </Button>
        <Input
          type="text"
          name="city"
          placeholder="City"
          register={register}
          handler={onChangeHandler}
          value={formValues.city}
          required
        />
      </div>
      <div className={classes.input_container}>
        <Select
          name="country"
          options={COUNTRIES}
          register={register}
          handler={onChangeHandler}
          value={formValues.country}
          required
        />
        <Input
          type="number"
          name="zip"
          placeholder="ZIP"
          register={register}
          handler={onChangeHandler}
          value={formValues.zip}
          required
        />
      </div>
    </>
  );
}

AddressForm.propTypes = {
  register: PropTypes.func.isRequired,
  formValues: PropTypes.objectOf(PropTypes.string).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
