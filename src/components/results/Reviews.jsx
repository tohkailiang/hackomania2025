import React from 'react';
import PropTypes from 'prop-types';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { texts } = this.props;
    return (
      <div>
        {texts.map((text, index) => (
          <div key={text}>{text}</div>
        ))}
      </div>
    );
  }
}

Reviews.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Reviews;