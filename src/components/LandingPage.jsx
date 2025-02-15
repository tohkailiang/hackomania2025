import React from 'react';
import QuizPanel from './QuizPanel';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuiz: false
    };
  }

  handleStartQuiz = () => {
    this.setState({ showQuiz: true });
  }

  render() {
    if (this.state.showQuiz) {
      return <QuizPanel quizbank="./data/quizbank.json" />;
    }

    return (
      <div className="landing-page">
        <h1>Welcome to the Quiz App</h1>
        <p>Test your knowledge with our interactive quiz!</p>
        <button 
          onClick={this.handleStartQuiz}
          className="start-button"
        >
          Start Quiz
        </button>
      </div>
    );
  }
}

export default LandingPage;