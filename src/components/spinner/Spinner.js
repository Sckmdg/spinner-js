import React, { Component } from 'react';
import Blade from '../blade/Blade'

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: 0
    }
  }

  calcPos = (angle, startPos, rate) => {
    return startPos + angle * rate
  };

  render() {
    const { angle } = this.state;
    return (
      <div className='spinner'>
        <Blade
          className='cross'
          angle={angle}
          calcPos={this.calcPos}
          startPos={{top: 60, left: 140}}
        />

        <Blade
          className='circle'
          angle={angle + 90}
          calcPos={this.calcPos}
          startPos={{top: 145, left: 240}}
        />

        <div className='bearing' />

        <Blade
          className='triangle'
          angle={angle + 180}
          calcPos={this.calcPos}
          startPos={{top: 240, left: 140}}
        />

        <Blade
          className='square'
          angle={angle + 270}
          calcPos={this.calcPos}
          startPos={{top: 145, left: 40}}
        />
      </div>
    );
  }
}

export default Spinner;
