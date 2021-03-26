import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.scss';

export default function Select({
  name, defaultValue, options, register, required,
}) {
  return (
    <select
      name={name}
      className={classes.select}
      defaultValue={defaultValue}
      ref={register({ required })}
      required
    >
      <option value="" disabled>Country</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Select.defaultProps = {
  required: false,
  defaultValue: '',
};
