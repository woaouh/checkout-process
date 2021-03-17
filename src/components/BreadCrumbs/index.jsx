import React from 'react';
import { useSelector } from 'react-redux';
import Crumb from './Crumb';
import styles from './index.module.sass';

const stages = [
  'Shipping',
  'Billing',
  'Payment',
];

export default function BreadCrumbs() {
  const activeStage = useSelector(({ checkout }) => checkout.activeStage);
  return (
    <ul className={styles.breadCrumbs}>
      {stages.map((stage) => (
        <Crumb key={stage} stage={stage} activeStage={activeStage} />
      ))}
    </ul>
  );
}
