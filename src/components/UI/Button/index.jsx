/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './index.module.scss';

const Button = ({ type, children, onClick, simple, geo }) => (
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

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
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

export default Button;
