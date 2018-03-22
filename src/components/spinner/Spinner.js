import React, { Component } from 'react';
import Blade from '../blade/Blade'

class Spinner extends Component {
  render() {
    return (
      <div className='spinner'>
        <Blade className='cross' />
        <Blade className='circle' />
        <div className='bearing' />
        <Blade className='triangle' />
        <Blade className='square' />
      </div>
    );
  }
}

export default Spinner;
