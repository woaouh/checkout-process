import React from 'react';
import classes from './index.module.scss';
import shoe from '../../assets/images/shoe.png';
import backpack from '../../assets/images/backpack.png';
import bag from '../../assets/images/bag.png';
import SummaryItem from './SummaryItem';
import OrderReport from './OrderReport';

const cartItems = [
  {
    name: 'The Chelsea Boot', img: shoe, type: 'Black', quantity: 1, price: 235,
  },
  {
    name: 'The Twill Snap Backpack', img: backpack, type: 'Reverse Denim + Brown leather', quantity: 1, price: 65,
  },
  {
    name: 'The Twill Zip Tote', img: bag, type: 'Reverse Denim + Black leather', quantity: 1, price: 48,
  },
];

const taxes = 12.12;

export default function OrderSummary() {
  function calcTotalPrice() {
    const result = cartItems.reduce((acc, item) => item.price + acc, 0);
    return { subtotal: result, total: result + taxes };
  }

  return (
    <div className={classes.order_summary}>
      <div className={classes.title_container}>
        <h2>Order Summary</h2>
        <button type="button">edit order</button>
      </div>

      <ul className={classes.items_list}>
        {cartItems.map((item) => (
          <SummaryItem
            key={item.name}
            name={item.name}
            img={item.img}
            type={item.type}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </ul>

      <OrderReport
        subtotal={calcTotalPrice().subtotal}
        total={calcTotalPrice().total}
        taxes={taxes}
      />

    </div>
  );
}
