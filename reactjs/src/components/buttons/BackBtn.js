import React from 'react';
import { BsCaretLeftFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import btnStyle from './buttons.module.css';

const BackBtn = (props) => {
  let previousPage = '';
  previousPage = props.journey;

  const styles = {
    container: {
      width: '3rem',
      height: '3rem',
    },
  };

  return (
    <div style={styles.container}>
      <a href={previousPage} className={btnStyle.link}>
        <BsCaretLeftFill className={btnStyle.icon2}/>
      </a>
    </div>
  );
};
export default BackBtn;

BackBtn.propTypes = {
  journey: PropTypes.string,
};
BackBtn.defaultProps = {
  journey: '/',
};
