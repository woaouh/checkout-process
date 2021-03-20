import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.sass';

export default function SummaryItem({
  name, img, quantity, type, price,
}) {
  return (
    <li key={name} className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.itemDescription}>
        <span className={styles.itemName}>{name}</span>
        <span>{type}</span>
        <span>
          Quantity:
          {' '}
          {quantity}
        </span>
      </div>
      <div className={styles.itemPrice}>
        $
        {price}
      </div>
    </li>
  );
}

SummaryItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
