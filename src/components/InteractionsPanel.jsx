import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { interactionDisplayConfig } from '../data/interactionDisplayConfig';

const InteractionsPanel = ({ interactions }) => {
  const navigate = useNavigate();

  return (
    <div className="interactions-panel" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      height: '100vh'
    }}>
      <div className="interactions-content" style={{
        maxWidth: '800px',
        width: '100%'
      }}>
        <h3>Interaction Statistics</h3>
        <div className="stats-grid">
          {Object.entries(interactions).map(([key, value]) => (
            <div key={key} className="stat-item">
              <label>{interactionDisplayConfig[key]?.label || key}:</label>
              <span>{interactionDisplayConfig[key]?.formatMessage(value) || value}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/results')}
            style={{
              width: '350px',
              maxWidth: '100%',
              height: '66px',
              backgroundColor: '#FF0000',
              border: '2px solid #00FF00',
              marginTop: '20px',
              marginBottom: '20px',
              alignSelf: 'center'
            }}
          >
            View Results
          </button>
        </div>
      </div>
    </div>
  );
};

InteractionsPanel.propTypes = {
  interactions: PropTypes.object.isRequired,
};

export default InteractionsPanel;