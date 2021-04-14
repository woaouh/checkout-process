import PropTypes from 'prop-types';

import Crumb from './Crumb';

import classes from './index.module.scss';

const BreadCrumbs = ({ steps }) => (
  <ul className={classes.bread_crumbs}>
    {steps.map((stage) => (
      <Crumb
        key={stage.name}
        stage={stage.name}
        path={stage.path}
        exact={stage.exact}
        step={stage.step}
      />
    ))}
  </ul>
);

BreadCrumbs.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BreadCrumbs;
