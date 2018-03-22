import React, { Component } from 'react';
import Spinner from './components/spinner/Spinner'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Spinner />
        <Footer />
      </div>
    );
  }
}

export default App;
