import PropTypes from 'prop-types';

import ValidationMessage from '../ValidationMessage';

import classes from './index.module.scss';

const Input = ({
  type, name, onChange, placeholder, register, message,
}) => (
  <div className={classes.input_wrapper}>
    {message && <ValidationMessage>{message}</ValidationMessage>}
    <input
      className={classes.input}
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      ref={register}
    />
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  message: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  message: '',
};

export default Input;
