import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        {text}
      </div>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;