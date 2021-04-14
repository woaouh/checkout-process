import PropTypes from 'prop-types';

import classes from './index.module.scss';

const Container = ({ children }) => <div className={classes.container}>{children}</div>;

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
