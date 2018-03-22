import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Blade extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    angle: PropTypes.number.isRequired,
    startPos: PropTypes.object.isRequired,
    calcPos: PropTypes.func.isRequired
  };

  render() {
    const { className, startPos } = this.props;
    const position = {top: `${startPos.top}px`, left: `${startPos.left}px`};

    return (
        <div
          className={`blade ${className}`}
          style={position}
        />
    );
  }
}

export default Blade;
