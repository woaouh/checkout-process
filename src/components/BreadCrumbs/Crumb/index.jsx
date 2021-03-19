import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.sass';

export default function Crumb({ stage }) {
  return <li key={stage} className={styles.crumb}>{stage}</li>;
}

Crumb.propTypes = {
  stage: PropTypes.string.isRequired,
};
