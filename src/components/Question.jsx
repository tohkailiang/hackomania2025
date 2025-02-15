import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ text }) => {
  return (
    <div>
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