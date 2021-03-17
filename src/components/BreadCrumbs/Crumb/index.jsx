import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.sass';

export default function Crumb({ stage, activeStage }) {
  return (
    <li
      key={stage}
      className={classNames(styles.crumb, {
        [styles.active]: activeStage === stage,
      })}
    >
      {stage}
    </li>
  );
}

Crumb.propTypes = {
  stage: PropTypes.string.isRequired,
  activeStage: PropTypes.string.isRequired,
};
