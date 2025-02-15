import React from 'react';
import PropTypes from 'prop-types';
import OptionButton from './OptionButton';

const Options = ({ options, onOptionClick }) => {
  return (
    <div className="options-container">
      {options.map((option, index) => (
        <OptionButton
          key={index}
          text={option.text}
          onClick={() => onOptionClick(option)}
        />
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
  ).isRequired,
  onOptionClick: PropTypes.func.isRequired
};

export default Options;
