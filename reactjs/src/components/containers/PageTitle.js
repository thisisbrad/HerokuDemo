import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  margin: {
    margin: '0',
    color: '#07047A',
  },
};

const PageTitle = (props) => (
  <div>
    <h1 style={styles.margin}>{props.value}</h1>
  </div>
);
export default PageTitle;

PageTitle.proptypes = {
  value: PropTypes.string,
};
PageTitle.defaultProps = {
  value: 'Page Title',
};
