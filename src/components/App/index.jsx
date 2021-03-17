import React from 'react';
import Navbar from '../Navbar';
import CheckoutContainer from '../CheckoutContainer';
import BreadCrumbs from '../BreadCrumbs';

export default function App() {
  return (
    <>
      <Navbar />
      <CheckoutContainer>
        <BreadCrumbs />
      </CheckoutContainer>
    </>
  );
}
