import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

import classes from './index.module.scss';

export default function Crumb({
  stage, path, exact, step, activeStep,
}) {
  return (
    <li className={classNames(classes.crumb, {
      [classes.disabled]: step > activeStep || activeStep >= 3,
    })}
    >
      <NavLink to={path} activeClassName={classes.active} exact={exact}>
        {stage}
      </NavLink>
    </li>
  );
}

Crumb.propTypes = {
  stage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
};
