import React from 'react';
import PropTypes from 'prop-types';

import classes from './index.module.scss';

export default function Select({
  name, onChange, options, register, required,
}) {
  return (
    <select
      name={name}
      className={classes.select}
      onChange={onChange}
      ref={register({ required })}
    >
      <option value="" disabled>Country</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Select.defaultProps = {
  onChange: () => {},
  required: false,
};
