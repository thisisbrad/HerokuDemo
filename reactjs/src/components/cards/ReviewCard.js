import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../inputs/Rating';

const ReviewCard = (props) => {
  let review = {};
  review = props.review;

  const styles = {
    reviewCtr: {
      width: '34rem',
      height: '21.5rem',
      margin: '0 auto',
      fontSize: '1.8rem',
    },
    infoCtr: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    margin0: {
      margin: '0',
    },
  };
  return (
    <div style={styles.reviewCtr}>
      <div style={styles.infoCtr}>
        <div>
          <img src={'https://picsum.photos/75/75'} alt={''} />
          <p>{review.user}</p>
          <Rating userRating={review.rating}/>
          <p style={styles.margin0}>{review.date}</p>
        </div>
        <div>
          <p style={styles.margin0}>{review.content}</p>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;

ReviewCard.propTypes = {
  review: PropTypes.object,
};
ReviewCard.defaultProps = {
  review: {
    user: 'Username',
    rating: 3,
    date: '02/02/2022',
    content: 'This is content. Are you content with this content? ',
  },
};
