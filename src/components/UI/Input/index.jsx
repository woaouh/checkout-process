import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.sass';

export default function Input({
  type, name, placeholder, register, required,
}) {
  return (
    <input
      className={styles.input}
      name={name}
      type={type}
      placeholder={placeholder}
      ref={register({ required })}
      required
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  required: false,
};
