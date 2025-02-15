import React from 'react';
import PropTypes from 'prop-types';

class Quotes extends React.Component {
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

Quotes.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Quotes;