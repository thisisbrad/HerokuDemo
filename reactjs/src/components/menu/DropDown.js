import React from 'react';
import { Link } from 'react-router-dom';
import menuStyle from './menu.module.css';

const DropDown = (props) => {
  if (!props.menuShow) {
    return null;
  }
  const onTrigger = () => {
    props.onClose();
  };

  return (
    <div onClick={props.onClose} className={menuStyle.dropDown}>
      <div onClick={ (e) => e.stopPropagation()}>
        <div className={menuStyle.textContainer} onClick={onTrigger}>
          <Link to={'/'} onClick={onTrigger}>Home</Link>
          <Link to={'/categories'} onClick={onTrigger}>Categories</Link>
          <Link to={'/'} onClick={onTrigger}>About</Link>
          <Link to={'/'} onClick={onTrigger}>Account</Link>
          <Link to={'/'} onClick={onTrigger}>Contact</Link>
        </div>
      </div>
    </div>
  );
};
export default DropDown;
