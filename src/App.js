import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <BrowserRouter>
          <div>
            <Main />
            <Header />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
