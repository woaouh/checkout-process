/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.sass';

export default function Button({ type, children, handler }) {
  return <button type={type} onClick={handler} className={styles.button}>{children}</button>;
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  handler: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  handler: (() => null),
};
