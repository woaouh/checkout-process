import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './index.module.sass';

export default function Crumb({ stage, route }) {
  return (
    <li key={stage} className={styles.crumb}>
      <NavLink to={route} activeClassName={styles.active} exact>
        {stage}
      </NavLink>
    </li>
  );
}

Crumb.propTypes = {
  stage: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
