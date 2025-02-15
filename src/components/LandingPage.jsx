import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  }

  return (
    <div className="landing-page">
      <h1>Welcome to the Quiz App</h1>
      <p>Test your knowledge with our interactive quiz!</p>
      <button 
        onClick={handleStartQuiz}
        className="start-button"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default LandingPage;