import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = ({ logo, title, description }) => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  }
  return (
    <div className="landing-page">
        <img src={logo} alt="Logo" className="landing-logo" />
      <div className="content-container">
        <h1>{title}</h1>
        <p>{description}</p>
        <button
          className="start-button"
          onClick={handleStartQuiz}
        >
        Start Quiz
      </button>
    </div>
    </div>
  );
}

export default LandingPage;