import React from 'react';
import { useSelector } from 'react-redux';
import Crumb from './Crumb';
import styles from './index.module.sass';

const stages = [
  { name: 'Shipping', step: 0 },
  { name: 'Billing', step: 1 },
  { name: 'Payment', step: 2 },
];

export default function BreadCrumbs() {
  const activeStep = useSelector(({ checkout }) => checkout.activeStep);
  return (
    <ul className={styles.breadCrumbs}>
      {stages.map((stage) => (
        <Crumb key={stage.step} step={stage.step} stage={stage.name} activeStep={activeStep} />
      ))}
    </ul>
  );
}
