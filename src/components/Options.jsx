import React from 'react';
import PropTypes from 'prop-types';
import OptionButton from './OptionButton';

const Options = ({ options, onOptionClick }) => {
  return (
    <div className="options-container" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '10px',
      padding: '10px'
    }}>
      {[...Array(4)].map((_, index) => (
        <OptionButton
          key={index}
          text={options[index]?.text || ''}
          onClick={() => options[index] && onOptionClick(options[index])}
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