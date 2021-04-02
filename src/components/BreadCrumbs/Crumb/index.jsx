import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { setActiveStep } from '../../../redux/checkoutSlice';

import classes from './index.module.scss';

export default function Crumb({
  stage, path, exact, step,
}) {
  const dispatch = useDispatch();
  const { activeStep } = useSelector(({ checkout }) => checkout);

  const completeStep = () => dispatch(setActiveStep(step));

  return (
    <li
      className={classNames(classes.crumb, {
        [classes.disabled]: step > activeStep || activeStep >= 3,
      })}
    >
      <NavLink to={path} activeClassName={classes.active} exact={exact} onClick={completeStep}>
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
};
