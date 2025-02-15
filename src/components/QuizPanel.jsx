import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Options from './Options';

class QuizPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      question: '',
      options: []
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
          question: data.questions[1],
          options: data.optionSets[1].options
        });
      })
      .catch(error => {
        console.error('Error loading quiz bank:', error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { isLoading, question, options } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>
          <Question text={question} />
        </div>
        <div>
          <Options options={options} />
        </div>
      </div>
    );
  }
}

QuizPanel.propTypes = {
  quizbank: PropTypes.string.isRequired
};

export default QuizPanel;