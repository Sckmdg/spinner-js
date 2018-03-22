import React, { Component } from 'react';
import Spinner from './components/spinner/Spinner'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='content'>
          <Spinner />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
