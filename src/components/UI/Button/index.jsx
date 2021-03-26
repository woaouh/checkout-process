/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './index.module.scss';

export default function Button({
  type, children, handler, simple,
}) {
  return (
    <button
      type={type}
      onClick={handler}
      className={classNames(classes.button, {
        [classes.simple]: simple,
      })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  handler: PropTypes.func,
  simple: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  handler: () => null,
  simple: false,
};
