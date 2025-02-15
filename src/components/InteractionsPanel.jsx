import React from 'react';
import PropTypes from 'prop-types';
import { interactionDisplayConfig } from '../data/interactionDisplayConfig';

const InteractionsPanel = ({ interactions }) => {
  return (
    <div className="interactions-panel">
      <h3>Interaction Statistics</h3>
      <div className="stats-grid">
        {Object.entries(interactions).map(([key, value]) => (
          <div key={key} className="stat-item">
            <label>{interactionDisplayConfig[key]?.label || key}:</label>
            <span>{interactionDisplayConfig[key]?.formatMessage(value) || value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

InteractionsPanel.propTypes = {
  interactions: PropTypes.object.isRequired,
};

export default InteractionsPanel;