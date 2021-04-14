import PropTypes from 'prop-types';

import ValidationMessage from '../ValidationMessage';

import classes from './index.module.scss';

const Select = ({
  name, onChange, options, register, message,
}) => (
  <div className={classes.select_wrapper}>
    {message && <ValidationMessage>{message}</ValidationMessage>}
    <select
      name={name}
      className={classes.select}
      onChange={onChange}
      ref={register}
    >
      <option value="" disabled>Country</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  message: PropTypes.string,
};

Select.defaultProps = {
  onChange: () => {},
  message: '',
};

export default Select;
