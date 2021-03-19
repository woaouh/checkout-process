import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Cart } from '../../assets/svg/cart.svg';
import styles from './index.module.sass';
import Container from '../Container';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.logoContainer}>
              <Logo />
            </div>
            <h1>Front-end Developer Test Task</h1>
          </div>
          <div className={styles.right}>
            <span>cart</span>
            <div className={styles.cartContainer}>
              <Cart />
              <div className={styles.cartCounter}>3</div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
