import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OptionButton = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: 255,
        height: 66,
        backgroundColor: isHovered ? '#F1B24B' : '#9FB3B9',
        border: `2px solid ${isHovered ? '#486C95' : '#9FB3B9'}`,
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px'
      }}
    >
      {text}
    </button>
  );
};

OptionButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default OptionButton;