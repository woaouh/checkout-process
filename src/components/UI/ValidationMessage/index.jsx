import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.scss';

export default function ValidationMessage({ children }) {
  return <div className={classes.message}>{children}</div>;
}

ValidationMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
