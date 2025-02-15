import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import Options from './Options';

class QuizPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentQuestionIndex: 0,
      questions: [],
      optionSets: [],
    };
  }

  componentDidMount() {
    fetch(this.props.quizbank)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          isLoading: false,
          questions: data.questions,
          optionSets: data.optionSets
        });
      })
      .catch(error => {
        console.error('Error loading quiz data:', error);
        this.setState({ isLoading: false });
      });
  }

  handleOptionClick = (option) => {
    this.setState(prevState => {
      const nextIndex = prevState.currentQuestionIndex + 1;
      if (nextIndex >= prevState.questions.length) {
        // Navigate back to home when quiz is complete
        if (this.props.navigate) {
          this.props.navigate('/');
        }
        return prevState;
      }
      return {
        currentQuestionIndex: nextIndex
      };
    });
  }

  render() {
    const { isLoading, questions, optionSets, currentQuestionIndex } = this.state;

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      backgroundColor: 'white'
    };

    const panelStyle = {
      width: '600px',
      height: '800px',
      borderRadius: '10px',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    };

    if (isLoading) {
      return <div style={containerStyle}><div style={panelStyle}>Loading...</div></div>;
    }

    if (questions.length === 0 || optionSets.length === 0) {
      return <div style={containerStyle}><div style={panelStyle}>No questions available</div></div>;
    }

    return (
      <div style={containerStyle}>
        <div style={panelStyle}>
          <div>
          <Question text={questions[currentQuestionIndex]} />
        </div>
        <div>
          <Options
            options={optionSets[currentQuestionIndex].options}
            onOptionClick={this.handleOptionClick}
          />
        </div>
      </div>
      </div>
    );
  }
}

// Wrapper component to provide navigation
const QuizPanelWithRouter = (props) => {
  const navigate = useNavigate();
  return <QuizPanel {...props} navigate={navigate} />;
};

QuizPanel.propTypes = {
  quizbank: PropTypes.string.isRequired,
  navigate: PropTypes.func
};

export default QuizPanelWithRouter;
