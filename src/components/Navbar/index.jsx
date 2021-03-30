import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../Container';

import { ReactComponent as Cart } from '../../assets/svg/cart.svg';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import classes from './index.module.scss';

export default function Navbar() {
  return (
    <header className={classes.navbar}>
      <Container>
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <div className={classes.logo_container}>
              <NavLink to="/" exact>
                <Logo />
              </NavLink>
            </div>
            <h1>Front-end Developer Test Task</h1>
          </div>
          <div className={classes.right}>
            <span>cart</span>
            <div className={classes.cart_container}>
              <Cart />
              <div className={classes.cart_counter}>3</div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
