import React from 'react';
import PropTypes from 'prop-types';

import classes from './index.module.scss';

export default function Container({ children }) {
  return <div className={classes.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
