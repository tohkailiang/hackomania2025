import React from 'react';
import PropTypes from 'prop-types';

const OptionButton = ({ text }) => {
  return (
    <button>
      {text}
    </button>
  );
};

OptionButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default OptionButton;