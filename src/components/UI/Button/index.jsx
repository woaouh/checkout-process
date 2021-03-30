/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './index.module.scss';

export default function Button({
  type, children, onClick, simple, geo,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
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
  onClick: PropTypes.func,
  simple: PropTypes.bool,
  geo: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  simple: false,
  geo: false,
};
