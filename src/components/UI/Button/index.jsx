/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.sass';

export default function Button({ type, children }) {
  return <button type={type} className={styles.button}>{children}</button>;
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
};
