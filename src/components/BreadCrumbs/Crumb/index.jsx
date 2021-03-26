import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './index.module.scss';

export default function Crumb({ stage, path, exact }) {
  return (
    <li className={classes.crumb}>
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
};
