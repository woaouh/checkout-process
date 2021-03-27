import React from 'react';
import PropTypes from 'prop-types';

import classes from './index.module.scss';

export default function Select({
  name, value, handler, options, register, required,
}) {
  return (
    <select
      name={name}
      className={classes.select}
      value={value}
      onChange={handler}
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
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string,
  handler: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Select.defaultProps = {
  required: false,
  handler: () => {},
};
