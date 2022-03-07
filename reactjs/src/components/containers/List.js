import React from 'react';
import PropTypes from 'prop-types';
import styles from './containers.module.css';

const List = (props) => {
  let listItems = [];
  listItems = props.listItems;
  return (
    <div>
      <ul>
        {listItems.map((item) => (
          <li className={styles.list}><p>{item}</p></li>
        ))}
      </ul>
    </div>
  );
};
export default List;

List.propTypes = {
  listItems: PropTypes.array,
};
List.defaultProps = {
  listItems: ['Home', 'Products'],
};
