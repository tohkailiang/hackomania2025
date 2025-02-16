import React from 'react';
import PropTypes from 'prop-types';

class Traits extends React.Component {
  render() {
    const { texts } = this.props;
    return (
      <ul className="traits-list">
        {texts.map((text, index) => (
          <li key={text} className="trait-item">{text}</li>
        ))}
      </ul>
    );
  }
}

Traits.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Traits;
