/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.scss';

export default function Button({ type, children, handler }) {
  return <button type={type} onClick={handler} className={classes.button}>{children}</button>;
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
