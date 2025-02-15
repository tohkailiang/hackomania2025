import React from 'react';
import PropTypes from 'prop-types';
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
        // Handle quiz completion here
        console.log('Quiz completed!');
        return prevState;
      }
      return {
        currentQuestionIndex: nextIndex
      };
    });
  }

  render() {
    const { isLoading, questions, optionSets, currentQuestionIndex } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (questions.length === 0 || optionSets.length === 0) {
      return <div>No questions available</div>;
    }

    return (
      <div>
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
    );
  }
}

QuizPanel.propTypes = {
  quizbank: PropTypes.string.isRequired
};

export default QuizPanel;