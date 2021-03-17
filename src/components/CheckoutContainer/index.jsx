import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.sass';
import Container from '../Container';

export default function CheckoutContainer({ children }) {
  return (
    <Container>
      <div className={styles.checkoutContainer}>{children}</div>
    </Container>
  );
}

CheckoutContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
