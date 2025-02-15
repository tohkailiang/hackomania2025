import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ imagePath }) => {
  return (
    <div className="logo-wrapper">
      <img 
        src={imagePath} 
        alt="Result Logo" 
        className="results-logo"
        width={128}
        height={128}
      />
    </div>
  );
};

Logo.propTypes = {
  imagePath: PropTypes.string.isRequired
};

export default Logo;