import React from 'react';
import PropTypes from 'prop-types';

const AcctInput = (props) => {
  const styles = {
    input: {
      width: '32rem',
      height: '2.7rem',
      margin: '1rem ',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
    },
    inputCntr: {
      width: '33rem',
      height: '3rem',
    },
  };
  return (
    <div styles={styles.inputCntr}>
      <input type={props.type} value={props.value} aria-label={`${props.value} input`}
      style={styles.input} />
    </div>
  );
};
export default AcctInput;
AcctInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
};
AcctInput.defaultProps = {
  type: 'text',
  value: 'Placeholder',
};
