import React from 'react';
import PropTypes from 'prop-types';

import classes from './index.module.scss';

export default function Input({
  type, name, onChange, placeholder, register, required,
}) {
  return (
    <input
      className={classes.input}
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      ref={register({ required })}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  onChange: () => {},
  required: false,
};
