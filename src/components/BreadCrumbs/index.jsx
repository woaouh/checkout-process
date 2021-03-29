import React from 'react';
import PropTypes from 'prop-types';

import Crumb from './Crumb';

import classes from './index.module.scss';

const stages = [
  {
    name: 'Shipping', path: '/', exact: true, step: 0,
  },
  {
    name: 'Billing', path: '/billing', exact: false, step: 1,
  },
  {
    name: 'Payment', path: '/payment', exact: false, step: 2,
  },
];

export default function BreadCrumbs({ activeStep }) {
  return (
    <ul className={classes.bread_crumbs}>
      {stages.map((stage) => (
        <Crumb
          key={stage.name}
          stage={stage.name}
          path={stage.path}
          exact={stage.exact}
          step={stage.step}
          activeStep={activeStep}
        />
      ))}
    </ul>
  );
}

BreadCrumbs.propTypes = {
  activeStep: PropTypes.number.isRequired,
};
