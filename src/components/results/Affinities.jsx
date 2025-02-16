import React from 'react';
import PropTypes from 'prop-types';

const Affinities = ({ imagePaths }) => {
  return (
    <div className="affinities-container">
      {imagePaths.map((path, index) => (
        <img
          key={`affinity-${index}`}
          src={path}
          alt={`Affinity ${index + 1}`}
          className="affinity-logo"
          width={80}
          height={80}
        />
      ))}
    </div>
  );
};

Affinities.propTypes = {
  imagePaths: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Affinities;