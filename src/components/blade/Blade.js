import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Blade extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired
  };

  render() {
    const { className } = this.props;
    return (
        <div className={`blade ${className}`} />
    );
  }
}

export default Blade;
