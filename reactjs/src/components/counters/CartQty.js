import React from 'react';
import counters from './counters.module.css';

const CartQty = (props) => (
  <div className={counters.cartQty}>
      <label for={'counter'}>Qty: </label>
      <input type={'number'} name={'counter'} id={'counter'} value={props.value} className={counters.input} />
  </div>
);
export default CartQty;
