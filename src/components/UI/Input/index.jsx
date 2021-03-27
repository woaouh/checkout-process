import React from 'react';
import PropTypes from 'prop-types';

import classes from './index.module.scss';

export default function Input({
  type, name, value, handler, placeholder, register, required,
}) {
  return (
    <input
      className={classes.input}
      name={name}
      type={type}
      value={value}
      onChange={handler}
      placeholder={placeholder}
      ref={register({ required })}
      required
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  handler: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  required: false,
  handler: () => {},
};
