import React from 'react';
import PropTypes from 'prop-types';
import OptionButton from './OptionButton';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
  }

  render() {
    return (
      <div>
        {this.state.options.map((option, index) => (
          <OptionButton 
            key={index}
            text={option}
          />
        ))}
      </div>
    );
  }
}

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Options;