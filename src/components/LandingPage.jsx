import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = ({ logo, title, description }) => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  }

  return (
    <div className="landing-page" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
      <div>
        <img src={logo} alt="Logo" className="landing-logo" />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <button
        className="start-button"
        onClick={handleStartQuiz}
        style={{
          width: '350px',
          height: '66px',
          backgroundColor: '#FF0000',
          border: '2px solid #00FF00',
          marginBottom: '40px',
          alignSelf: 'center'
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default LandingPage;