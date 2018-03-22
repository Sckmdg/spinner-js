import React, { Component } from 'react';
import Blade from './components/blade/Blade'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          there will be spinner
        <Blade />
        <Blade />
        <Blade />
        <Blade />
      </div>
    );
  }
}

export default App;
