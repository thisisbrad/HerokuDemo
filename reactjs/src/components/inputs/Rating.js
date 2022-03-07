import React from 'react';
import PropTypes from 'prop-types';
import { BsStarFill, BsStar } from 'react-icons/bs';
import inputs from './inputs.module.css';

function getRating(args) {
  const rate = args;
  switch (rate) {
    case 1:
      return ['f', 'e', 'e', 'e', 'e'];
    case 2:
      return ['f', 'f', 'e', 'e', 'e'];
    case 3:
      return ['f', 'f', 'f', 'e', 'e'];
    case 4:
      return ['f', 'f', 'f', 'f', 'e'];
    case 5:
      return ['f', 'f', 'f', 'f', 'f'];
    default:
      return ['e', 'e', 'e', 'e', 'e'];
  }
}

const Rating = (props) => {
  let userRating = 0;
  userRating = props.userRating;
  const rateArray = getRating(userRating);

  return (
    <div className={inputs.container}>
    {rateArray.map((rate) => {
      if (rate === 'f') {
        return <BsStarFill className={inputs.icon}/>;
      }
      return <BsStar className={inputs.icon}/>;
    })}
    </div>
  );
};
export default Rating;

Rating.propTypes = {
  userRating: PropTypes.number,
};
Rating.defaultProps = {
  userRating: 0,
};
