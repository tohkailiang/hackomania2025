import React from 'react';
import PropTypes from 'prop-types';

class Logo extends React.Component {
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

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;