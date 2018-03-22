import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Blade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: props.startPos.top,
      left: props.startPos.left
    }
  }

  static propTypes = {
    className: PropTypes.string.isRequired,
    angle: PropTypes.number.isRequired,
    startPos: PropTypes.object.isRequired,
    calcPos: PropTypes.func.isRequired
  };

  calcPos = () => {
    this.setState({
      top: 90 * Math.sin(this.props.angle),
      left: 90 * Math.cos(this.props.angle)
    });
  };

  componentWillReceiveProps (nextProps) {
    if (this.props.angle !== nextProps.angle) {
      this.calcPos()
    }
  }

  render() {
    const { top, left } = this.state;
    const { className } = this.props;
    const position = {top: `${top}px`, left: `${left}px`};

    return (
      <div
        className={`blade ${className}`}
        style={position}
      />
    );
  }
}

export default Blade;
