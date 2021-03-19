import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './index.module.sass';

export default function Crumb({ stage, path, exact }) {
  return (
    <li className={styles.crumb}>
      <NavLink to={path} activeClassName={styles.active} exact={exact}>
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
