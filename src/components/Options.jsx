import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      score: PropTypes.arrayOf(PropTypes.number).isRequired
    })
  ).isRequired
};

export default Options;