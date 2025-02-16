import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ imagePath }) => {
  return (
    <div className="logo-wrapper">
      <img 
        src={imagePath} 
        alt="Result Logo" 
        className="results-logo"
        width={200}
        height={200}
      />
    </div>
  );
};

Logo.propTypes = {
  imagePath: PropTypes.string.isRequired
};

export default Logo;