import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from '../Navbar';
import CheckoutContainer from '../CheckoutContainer';

import { fetchGeocodedLocation } from '../../redux/checkoutSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchGeocodedLocation()), []);

  return (
    <>
      <Navbar />
      <main>
        <CheckoutContainer />
      </main>
    </>
  );
};

export default App;
