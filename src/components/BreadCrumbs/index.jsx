import React from 'react';
import Crumb from './Crumb';
import classes from './index.module.scss';

const stages = [
  { name: 'Shipping', path: '/', exact: true },
  { name: 'Billing', path: '/billing', exact: false },
  { name: 'Payment', path: '/payment', exact: false },
];

export default function BreadCrumbs() {
  return (
    <ul className={classes.bread_crumbs}>
      {stages.map((stage) => (
        <Crumb key={stage.name} stage={stage.name} path={stage.path} exact={stage.exact} />
      ))}
    </ul>
  );
}
