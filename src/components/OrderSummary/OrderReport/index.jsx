import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.scss';

export default function OrderReport({ subtotal, total, taxes }) {
  return (
    <div>
      <ul className={classes.order_report}>
        <li>
          <span>Subtotal</span>
          <span>
            $
            {subtotal}
          </span>
        </li>
        <li>
          <span>Shipping</span>
          <span>Free</span>
        </li>
        <li>
          <span>Taxes</span>
          <span>
            $
            {taxes}
          </span>
        </li>
      </ul>
      <div className={classes.order_total}>
        <span>Total</span>
        <span>
          $
          {total}
        </span>
      </div>
    </div>
  );
}

OrderReport.propTypes = {
  subtotal: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
};
