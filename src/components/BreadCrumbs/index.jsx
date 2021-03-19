import React from 'react';
import Crumb from './Crumb';
import styles from './index.module.sass';

const stages = ['Shipping', 'Billing', 'Payment'];

export default function BreadCrumbs() {
  return (
    <ul className={styles.breadCrumbs}>
      {stages.map((stage) => (
        <Crumb key={stage} stage={stage} />
      ))}
    </ul>
  );
}
