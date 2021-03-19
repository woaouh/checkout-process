import React from 'react';
import Crumb from './Crumb';
import styles from './index.module.sass';

const stages = [
  { name: 'Shipping', path: '/', exact: true },
  { name: 'Billing', path: '/billing', exact: false },
  { name: 'Payment', path: '/payment', exact: false },
];

export default function BreadCrumbs() {
  return (
    <ul className={styles.breadCrumbs}>
      {stages.map((stage) => (
        <Crumb key={stage.name} stage={stage.name} path={stage.path} exact={stage.exact} />
      ))}
    </ul>
  );
}
