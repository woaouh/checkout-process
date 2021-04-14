import PropTypes from 'prop-types';

import classes from './index.module.scss';

const SummaryItem = ({ name, img, quantity, type, price }) => (
  <li key={name} className={classes.cart_item}>
    <div className={classes.image_container}>
      <img src={img} alt={name} />
    </div>
    <div className={classes.item_description}>
      <span className={classes.item_name}>{name}</span>
      <span>{type}</span>
      <span>{`Quantity: ${quantity}`}</span>
    </div>
    <div className={classes.item_price}>{`$ ${price}`}</div>
  </li>
);

SummaryItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SummaryItem;
