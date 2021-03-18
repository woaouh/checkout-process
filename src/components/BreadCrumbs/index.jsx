import React from 'react';
import Crumb from './Crumb';
import styles from './index.module.sass';

const stages = [
  { name: 'Shipping', route: '/' },
  { name: 'Billing', route: '/billing' },
  { name: 'Payment', route: '/payment' },
];

export default function BreadCrumbs() {
  return (
    <ul className={styles.breadCrumbs}>
      {stages.map((stage) => (
        <Crumb key={stage.name} stage={stage.name} route={stage.route} />
      ))}
    </ul>
  );
}
