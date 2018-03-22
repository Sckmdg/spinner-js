import React, { Component } from 'react';
import Blade from '../blade/Blade'

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: 0
    }
  }

  spin = () => {
    this.setState({angle: this.state.angle + 1})
  };

  render() {
    const { angle } = this.state;
    return (
      <div className='spinner'>
        <Blade
          className='cross'
          angle={angle}
          startPos={{top: -90, left: 0}}
        />

        <Blade
          className='circle'
          angle={angle + 90}
          startPos={{top: 0, left: 90}}
        />

        <div className='blade bearing' />

        <Blade
          className='triangle'
          angle={angle + 180}
          startPos={{top: 90, left: 0}}
        />

        <Blade
          className='square'
          angle={angle + 270}
          startPos={{top: 0, left: -90}}
        />

        <button onClick={this.spin} className='spin'>
          Spin
        </button>
      </div>
    );
  }
}

export default Spinner;
