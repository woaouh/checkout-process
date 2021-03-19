import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.sass';

export default function Crumb({ stage, step, activeStep }) {
  return (
    <li
      key={stage}
      className={classNames(styles.crumb, {
        [styles.active]: activeStep === step,
      })}
    >
      {stage}

    </li>
  );
}

Crumb.propTypes = {
  stage: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
};
