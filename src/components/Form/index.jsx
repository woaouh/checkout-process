import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router';
import PropTypes from 'prop-types';

import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import PaymentForm from './PaymentForm';
import CompletedOrder from './CompletedOrder';

import { setUserInfo } from '../../redux/checkoutSlice';

const Form = ({ steps }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { activeStep } = useSelector(({ checkout }) => checkout);

  const onFormSubmit = (data) => {
    dispatch(setUserInfo(data));
    history.push(steps[activeStep + 1].path);
  };

  const renderRoute = (step, component) => (
    <Route key={step} path={steps[step].path}>
      {activeStep !== step ? <Redirect to="/" /> : component}
    </Route>
  );

  const formSteps = [
    <ShippingForm onSubmit={onFormSubmit} />,
    <BillingForm onSubmit={onFormSubmit} />,
    <PaymentForm onSubmit={onFormSubmit} />,
    <CompletedOrder />,
  ];

  return formSteps.map((component, i) => renderRoute(i, component));
};

Form.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
