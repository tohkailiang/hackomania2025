import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { standardButtonStyle } from '../styles/buttonStyles';

const RedirectPanel = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/recommendations', { state: { username: name } });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '10px'
    }}>
      <img
        src={"./sprites/pengwing.png"}
        width={400}
        height={400}
      />
      <h2>Before we continue, how do we address you?</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '16px',
          width: '250px'
        }}
      />
      <button
        onClick={handleProceed}
        style={{
          ...standardButtonStyle,
          width: 'auto'
        }}
      >
        Proceed
      </button>
    </div>
  );
};

export default RedirectPanel;