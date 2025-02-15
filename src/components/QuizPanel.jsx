import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Options from './Options';

class QuizPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.question,
      options: props.options,
      answer: props.answer
    };

    this.question = props.question;
    this.options = props.options;
    this.answer = props.answer;
  }

  render() {
    return (
      <div>
        <div>
          <Question text={this.state.question} />
        </div>
        <div>
          <Options options={this.state.options} />
        </div>
        <div>
          {this.state.answer}
        </div>
      </div>
    );
  }
}

QuizPanel.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  answer: PropTypes.string.isRequired
};

export default QuizPanel;