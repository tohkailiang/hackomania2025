import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectPanel = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleProceed = () => {
    // Store the name value (you can add your storage logic here)
    console.log('Name submitted:', name);
    navigate('/');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '20px'
    }}>
      <h2>Before we continue, what should we call you?</h2>
      
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
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Proceed
      </button>
    </div>
  );
};

export default RedirectPanel;
