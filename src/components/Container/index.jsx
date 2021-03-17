import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.sass';

export default function Container({ children }) {
  return (
    <div className={styles.container}>{children}</div>
  );
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
