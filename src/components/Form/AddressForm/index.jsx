import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import Loader from '../../UI/Loader';

import { ReactComponent as Geo } from '../../../assets/svg/geolocation.svg';
import COUNTRIES from '../../../assets/countries';

import classes from './index.module.scss';

export default function AddressForm({ register, onClick, onChange }) {
  const { status } = useSelector(({ checkout }) => checkout);

  return (
    <div className={classes.address_container}>
      {status === 'loading' && <Loader />}
      <Input
        type="text"
        name="address"
        placeholder="Street Address"
        register={register}
        onChange={onChange}
        required
      />
      <Input
        type="text"
        name="apartment"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
        register={register}
        onChange={onChange}
        required
      />
      <div className={classes.geo_container}>
        <Button onClick={onClick} geo>
          <Geo />
        </Button>
        <Input
          type="text"
          name="city"
          placeholder="City"
          register={register}
          onChange={onChange}
          required
        />
      </div>
      <div className={classes.input_container}>
        <Select
          name="country"
          options={COUNTRIES}
          register={register}
          onChange={onChange}
          required
        />
        <Input
          type="number"
          name="postcode"
          placeholder="ZIP"
          register={register}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}

AddressForm.propTypes = {
  register: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
