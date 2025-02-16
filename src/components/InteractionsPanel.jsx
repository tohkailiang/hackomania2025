import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { interactionDisplayConfig } from '../data/interactionDisplayConfig';
import { motion } from 'framer-motion';
import { standardButtonStyle } from '../styles/buttonStyles';

const InteractionsPanel = ({ interactions }) => {
  const navigate = useNavigate();

  return (
    <div className="interactions-panel" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      height: '100vh',
      justifyContent: 'space-between'
    }}>
      <div className="interactions-content" style={{
        maxWidth: '800px',
        width: '100%'
      }}>
        <h3>Interaction Statistics</h3>
        <div className="stats-grid" style={{
          display: 'flex',
          flexDirection: 'column',
                gap: '10px'
        }}>
          {Object.entries(interactions).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="stat-item"
              style={{
                border: '2px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                margin: '5px',
                color: 'black',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '10px',
                minHeight: '84px',
                textAlign: 'left'
              }}
            >
              <img
                src={interactionDisplayConfig[key]?.image || '/default-icon.png'}
                alt={key}
                style={{
                  width: '64px',
                  height: '64px',
                  flexShrink: 0, // Prevent image from shrinking
                  objectFit: 'contain'
                }}
              />
              <span>{interactionDisplayConfig[key]?.formatMessage(value) || value}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 'auto' }}>
      <button
        onClick={() => navigate('/redirect')}
        style={{
          ...standardButtonStyle,
          width: '350px',
          maxWidth: '100%',
          height: '66px',
          marginBottom: '20px'
        }}
      >
        Continue
      </button>
      </div>
    </div>
  );
};
InteractionsPanel.propTypes = {
  interactions: PropTypes.object.isRequired,
};

export default InteractionsPanel;