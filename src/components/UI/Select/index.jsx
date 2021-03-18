import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.sass';

export default function Select({
  name, options, register, required,
}) {
  return (
    <select name={name} className={styles.select} defaultValue="" ref={register({ required })} required>
      <option value="" disabled>Country</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Select.defaultProps = {
  required: false,
};
