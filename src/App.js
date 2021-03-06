import React, { Component } from 'react';

import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
