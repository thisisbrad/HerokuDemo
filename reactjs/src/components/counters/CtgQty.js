import React from 'react';
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs';
import counters from './counters.module.css';

const CtgQty = () => (
  <div className={counters.container}>
    <BsDashCircle className={counters.icon}/>
    <p className={counters.counterText}>1</p>
    <BsPlusCircle className={counters.icon}/>
  </div>
);
export default CtgQty;
