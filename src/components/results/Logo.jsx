import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ imagePath }) => {
  return (
    <img 
      src={imagePath} 
      alt="Result Logo" 
      className="results-logo"
      width={128}
      height={128}
    />
  );
};

Logo.propTypes = {
  imagePath: PropTypes.string.isRequired
};

export default Logo;
