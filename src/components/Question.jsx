import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ text }) => {
  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      fontSize: '18px'
    }}>
      {text.text}
    </div>
  );
};

Question.propTypes = {
  text: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Question;