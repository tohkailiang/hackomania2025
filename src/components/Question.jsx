import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  render() {
    return (
      <div>
        {this.state.text}
      </div>
    );
  }
}

Question.propTypes = {
  text: PropTypes.string.isRequired
};

export default Question;