/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './index.module.scss';

export default function Button({
  type, children, handler, simple, geo,
}) {
  return (
    <button
      type={type}
      onClick={handler}
      className={classNames(classes.button, {
        [classes.simple]: simple,
        [classes.geo_button]: geo,
      })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  handler: PropTypes.func,
  simple: PropTypes.bool,
  geo: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  handler: () => null,
  simple: false,
  geo: false,
};
